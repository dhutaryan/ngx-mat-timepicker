import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  computed,
  DOCUMENT,
  ElementRef,
  inject,
  input,
  model,
  ViewEncapsulation,
} from '@angular/core';
import { coerceNumberProperty, NumberInput } from '@angular/cdk/coercion';
import { ThemePalette } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { debounceTime, fromEvent, merge, take } from 'rxjs';
import {
  getClockCorrectedRadius,
  getClockOuterRadius,
  getClockRadius,
} from './clock-size';
import { ClockDialViewCell } from './hours-clock-dial';

export const ALL_MINUTES = Array(60)
  .fill(null)
  .map((_, i) => i);

@Component({
  selector: 'mat-minutes-clock-dial',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: 'minutes-clock-dial.html',
  styleUrls: ['clock-dial.scss'],
  exportAs: 'matMinutesClockDial',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'mat-clock-dial mat-clock-dial-minutes',
    '(mousedown)': '_onUserAction($event)',
    '(touchstart)': '_onUserAction($event)',
  },
})
export class MatMinutesClockDial {
  private readonly _cdr = inject(ChangeDetectorRef);
  private readonly _document = inject(DOCUMENT);
  private readonly _element = inject<ElementRef<HTMLElement>>(ElementRef);

  protected readonly isMinutePoint = computed(
    () => !!this.minutes().find((hour) => hour.value === this.selectedMinute()),
  );

  protected readonly minutes = computed(() =>
    this._initMinutes(this.availableMinutes(), this.touchUi()),
  );

  protected readonly disabled = computed(
    () => !this.availableMinutes().includes(this.selectedMinute()),
  );

  protected handStyles = computed(() =>
    this._handStyles(this.selectedMinute(), this.touchUi()),
  );

  /** Selected minute. */
  readonly selectedMinute = model(0);

  /** Step over minutes. */
  readonly interval = input(1, {
    transform: (value: NumberInput) => coerceNumberProperty(value) || 1,
  });

  readonly availableMinutes = input<number[]>([]);

  /** Color palette. */
  readonly color = input<ThemePalette>();

  /** Whether the timepicker UI is in touch mode. */
  readonly touchUi = input(false);

  /** Handles mouse and touch events on dial and document. */
  _onUserAction(event: MouseEvent | TouchEvent): void {
    if (event.cancelable) {
      event.preventDefault();
    }

    this._setMinute(event);

    const eventsSubscription = merge(
      fromEvent<MouseEvent>(this._document, 'mousemove'),
      fromEvent<TouchEvent>(this._document, 'touchmove'),
    )
      .pipe(debounceTime(0))
      .subscribe({
        next: (event) => {
          event.preventDefault();
          this._setMinute(event);
        },
      });

    merge(
      fromEvent<MouseEvent>(this._document, 'mouseup'),
      fromEvent<TouchEvent>(this._document, 'touchend'),
    )
      .pipe(take(1))
      .subscribe({
        next: () => {
          eventsSubscription.unsubscribe();
        },
      });
  }

  _isActiveCell(minute: number): boolean {
    return this.selectedMinute() === minute;
  }

  private _setMinute(event: MouseEvent | TouchEvent): void {
    const element = this._element.nativeElement;
    const window = this._getWindow();
    const elementRect = element.getBoundingClientRect();
    const width = element.offsetWidth;
    const height = element.offsetHeight;
    const pageX =
      event instanceof MouseEvent ? event.pageX : event.touches[0].pageX;
    const pageY =
      event instanceof MouseEvent ? event.pageY : event.touches[0].pageY;
    const x = width / 2 - (pageX - elementRect.left - window.scrollX);
    const y = height / 2 - (pageY - elementRect.top - window.scrollY);
    const unit = Math.PI / (30 / this.interval());
    const atan2 = Math.atan2(-x, y);
    const radian = atan2 < 0 ? Math.PI * 2 + atan2 : atan2;
    const initialValue = Math.round(radian / unit) * this.interval();
    const value = initialValue === 60 ? 0 : initialValue;

    if (this.availableMinutes().includes(value)) {
      this.selectedMinute.set(value);
    }

    this._cdr.detectChanges();
  }

  /** Creates list of minutes. */
  private _initMinutes(
    availableMinutes: number[],
    touchUi: boolean,
  ): ClockDialViewCell[] {
    return ALL_MINUTES.filter((minute) => minute % 5 === 0).map((minute) => {
      const radian = (minute / 30) * Math.PI;
      const displayValue = minute === 0 ? '00' : String(minute);
      const correctedRadius = getClockCorrectedRadius(touchUi);
      const outerRadius = getClockOuterRadius(touchUi);
      return {
        value: minute,
        displayValue,
        left: correctedRadius + Math.sin(radian) * outerRadius,
        top: correctedRadius - Math.cos(radian) * outerRadius,
        disabled: !availableMinutes.includes(minute),
      };
    });
  }

  /** Use defaultView of injected document if available or fallback to global window reference */
  private _getWindow(): Window {
    return this._document.defaultView || window;
  }

  /** Hand styles based on selected minute. */
  private _handStyles(
    selected: number,
    touchUi: boolean,
  ): Record<string, string> {
    const deg = Math.round(selected * (360 / 60));
    const height = getClockOuterRadius(touchUi);
    const marginTop = getClockRadius(touchUi) - getClockOuterRadius(touchUi);

    return {
      transform: `rotate(${deg}deg)`,
      height: `${height}px`,
      'margin-top': `${marginTop}px`,
    };
  }
}
