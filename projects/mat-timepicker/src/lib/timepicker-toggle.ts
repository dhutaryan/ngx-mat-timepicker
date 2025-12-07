import {
  Attribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  contentChild,
  Directive,
  Input,
  input,
  model,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';

import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { MatButtonModule } from '@angular/material/button';
import { merge, Observable, of, Subscription } from 'rxjs';

import { MatTimepicker } from './timepicker';
import { MatTimepickerIntl } from './timepicker-intl';

@Directive({ selector: '[matTimepickerToggleIcon]', standalone: true })
export class MatTimepickerToggleIcon {}

@Component({
  selector: 'mat-timepicker-toggle',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './timepicker-toggle.html',
  styleUrls: ['./timepicker-toggle.scss'],
  exportAs: 'matTimepickerToggle',
  host: {
    class: 'mat-timepicker-toggle',
    '[attr.tabindex]': 'null',
    '[class.mat-timepicker-toggle-active]': 'timepicker()?.opened',
    '[class.mat-accent]': 'timepicker()?.color === "accent"',
    '[class.mat-warn]': 'timepicker()?.color === "warn"',
    '(click)': 'open($event)',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatTimepickerToggle<T> implements OnChanges, OnDestroy {
  /** Timepicker instance. */
  readonly timepicker = input<MatTimepicker<T>>(undefined, {
    alias: 'for',
  });

  /** Whether the toggle button is disabled. */
  @Input()
  get disabled(): boolean {
    if (this._disabled === undefined && this.timepicker()) {
      return !!this.timepicker()?.disabled;
    }

    return !!this._disabled;
  }
  set disabled(value: BooleanInput) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled: boolean;

  /** Whether ripples on the toggle should be disabled. */
  readonly disableRipple = input<boolean>();

  /** Tabindex for the toggle. */
  readonly tabIndex = model<number | null>();

  /** Custom icon set by the consumer. */
  readonly customIcon = contentChild(MatTimepickerToggleIcon);

  /** Screen-reader label for the button. */
  readonly ariaLabel = input<string>('', { alias: 'aria-label' });

  private _stateChanges = Subscription.EMPTY;

  constructor(
    @Attribute('tabindex') defaultTabIndex: string,
    public _intl: MatTimepickerIntl,
    private _cdr: ChangeDetectorRef,
  ) {
    const parsedTabIndex = Number(defaultTabIndex);
    this.tabIndex.set(
      parsedTabIndex || parsedTabIndex === 0 ? parsedTabIndex : null,
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['timepicker']) {
      this._watchStateChanges();
    }
  }

  ngOnDestroy() {
    this._stateChanges.unsubscribe();
  }

  /** Opens timepicker. */
  open(event: Event): void {
    const timepicker = this.timepicker();
    if (timepicker && !this.disabled) {
      timepicker.open();
      event.stopPropagation();
    }
  }

  private _watchStateChanges() {
    const timepicker = this.timepicker();
    const timepickerStateChanged = timepicker ? timepicker.stateChanges : of();
    const inputStateChanged = timepicker?.timepickerInput
      ? timepicker.timepickerInput.stateChanges
      : of();
    const timepickerToggled = timepicker
      ? merge(timepicker.openedStream, timepicker.closedStream)
      : of();

    this._stateChanges.unsubscribe();
    this._stateChanges = merge(
      this._intl.changes,
      timepickerStateChanged as Observable<void>,
      inputStateChanged,
      timepickerToggled,
    ).subscribe(() => this._cdr.markForCheck());
  }
}
