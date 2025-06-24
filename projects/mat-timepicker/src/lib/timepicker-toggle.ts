import {
  Component,
  ChangeDetectionStrategy,
  Directive,
  ViewEncapsulation,
  Input,
  ContentChild,
  Attribute,
  SimpleChanges,
  OnChanges,
  OnDestroy,
  ChangeDetectorRef,
} from '@angular/core';

import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { MatButtonModule } from '@angular/material/button';
import { Observable, Subscription, merge, of } from 'rxjs';

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
    '[class.mat-timepicker-toggle-active]': 'timepicker && timepicker.opened',
    '[class.mat-accent]': 'timepicker && timepicker.color === "accent"',
    '[class.mat-warn]': 'timepicker && timepicker.color === "warn"',
    '(click)': 'open($event)',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatTimepickerToggle<T> implements OnChanges, OnDestroy {
  /** Timepicker instance. */
  @Input('for') timepicker: MatTimepicker<T>;

  /** Whether the toggle button is disabled. */
  @Input()
  get disabled(): boolean {
    if (this._disabled === undefined && this.timepicker) {
      return this.timepicker.disabled;
    }

    return !!this._disabled;
  }
  set disabled(value: BooleanInput) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled: boolean;

  /** Whether ripples on the toggle should be disabled. */
  @Input() disableRipple: boolean;

  /** Tabindex for the toggle. */
  @Input() tabIndex: number | null;

  /** Custom icon set by the consumer. */
  @ContentChild(MatTimepickerToggleIcon) customIcon: MatTimepickerToggleIcon;

  /** Screen-reader label for the button. */
  @Input('aria-label') ariaLabel: string;

  private _stateChanges = Subscription.EMPTY;

  constructor(
    @Attribute('tabindex') defaultTabIndex: string,
    public _intl: MatTimepickerIntl,
    private _cdr: ChangeDetectorRef,
  ) {
    const parsedTabIndex = Number(defaultTabIndex);
    this.tabIndex =
      parsedTabIndex || parsedTabIndex === 0 ? parsedTabIndex : null;
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
    if (this.timepicker && !this.disabled) {
      this.timepicker.open();
      event.stopPropagation();
    }
  }

  private _watchStateChanges() {
    const timepickerStateChanged = this.timepicker
      ? this.timepicker.stateChanges
      : of();
    const inputStateChanged =
      this.timepicker && this.timepicker.timepickerInput
        ? this.timepicker.timepickerInput.stateChanges
        : of();
    const timepickerToggled = this.timepicker
      ? merge(this.timepicker.openedStream, this.timepicker.closedStream)
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
