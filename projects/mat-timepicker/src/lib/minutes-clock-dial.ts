import { CommonModule, DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { ThemePalette } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { debounceTime, fromEvent, merge, take } from 'rxjs';

import { ClockDialViewCell } from './hours-clock-dial';
import { getClockCorrectedRadius, getClockOuterRadius, getClockRadius } from './clock-size';

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
export class MatMinutesClockDial implements OnInit {
  /** Selected minute. */
  @Input()
  get selectedMinute(): number {
    return this._selectedMinute;
  }
  set selectedMinute(value: number) {
    this._selectedMinute = value;
  }
  private _selectedMinute = 0;

  /** Step over minutes. */
  @Input()
  get interval(): number {
    return this._interval;
  }
  set interval(value: number) {
    this._interval = coerceNumberProperty(value) || 1;
  }
  private _interval: number = 1;

  @Input()
  get availableMinutes(): number[] {
    return this._availableMinutes;
  }
  set availableMinutes(value: number[]) {
    this._availableMinutes = value;
    this._initMinutes();
  }
  private _availableMinutes: number[] = [];

  /** Color palette. */
  @Input() color: ThemePalette;

  /** Whether the timepicker UI is in touch mode. */
  @Input()
  get touchUi(): boolean {
    return this._touchUi;
  }
  set touchUi(value: boolean) {
    this._touchUi = value;
  }
  private _touchUi: boolean;

  /** Emits selected minute. */
  @Output() selectedChange = new EventEmitter<number>();

  minutes: ClockDialViewCell[] = [];

  get disabled(): boolean {
    return !this.availableMinutes.includes(this.selectedMinute);
  }

  get isMinutePoint(): boolean {
    return !!this.minutes.find((hour) => hour.value === this.selectedMinute);
  }

  constructor(
    private _element: ElementRef<HTMLElement>,
    private _cdr: ChangeDetectorRef,
    @Inject(DOCUMENT) private _document: Document,
    @Inject(Window) private _window: Window,
  ) {}

  ngOnInit(): void {
    this._initMinutes();
  }

  /** Hand styles based on selected minute. */
  _handStyles(): any {
    const deg = Math.round(this._selectedMinute * (360 / 60));
    const height = getClockOuterRadius(this.touchUi);
    const marginTop = getClockRadius(this.touchUi) - getClockOuterRadius(this.touchUi);

    return {
      transform: `rotate(${deg}deg)`,
      height: `${height}px`,
      'margin-top': `${marginTop}px`,
    };
  }

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
    return this.selectedMinute === minute;
  }

  private _setMinute(event: MouseEvent | TouchEvent): void {
    const element = this._element.nativeElement;
    const elementRect = element.getBoundingClientRect();
    const width = element.offsetWidth;
    const height = element.offsetHeight;
    const pageX = event instanceof MouseEvent ? event.pageX : event.touches[0].pageX;
    const pageY = event instanceof MouseEvent ? event.pageY : event.touches[0].pageY;
    const x = width / 2 - (pageX - elementRect.left - this._window.scrollX);
    const y = height / 2 - (pageY - elementRect.top - this._window.scrollY);
    const unit = Math.PI / (30 / this.interval);
    const atan2 = Math.atan2(-x, y);
    const radian = atan2 < 0 ? Math.PI * 2 + atan2 : atan2;
    const initialValue = Math.round(radian / unit) * this.interval;
    const value = initialValue === 60 ? 0 : initialValue;

    if (this.availableMinutes.includes(value) && this.availableMinutes.includes(value)) {
      this.selectedMinute = value;
      this.selectedChange.emit(this.selectedMinute);
    }

    this._cdr.detectChanges();
  }

  /** Creates list of minutes. */
  private _initMinutes(): void {
    this.minutes = ALL_MINUTES.filter((minute) => minute % 5 === 0).map((minute) => {
      const radian = (minute / 30) * Math.PI;
      const displayValue = minute === 0 ? '00' : String(minute);

      return {
        value: minute,
        displayValue,
        left:
          getClockCorrectedRadius(this.touchUi) +
          Math.sin(radian) * getClockOuterRadius(this.touchUi),
        top:
          getClockCorrectedRadius(this.touchUi) -
          Math.cos(radian) * getClockOuterRadius(this.touchUi),
        disabled: !this.availableMinutes.includes(minute),
      };
    });
  }
}
