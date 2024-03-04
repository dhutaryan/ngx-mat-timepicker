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
import { ThemePalette } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { debounceTime, fromEvent, merge, take } from 'rxjs';

import {
  getClockCorrectedRadius,
  getClockInnerRadius,
  getClockOuterRadius,
  getClockRadius,
  getClockTickRadius,
} from './clock-size';

export interface ClockDialViewCell {
  value: number;
  displayValue: string;
  left: number;
  top: number;
  disabled: boolean;
}

export const ALL_HOURS = Array(24)
  .fill(null)
  .map((_, i) => i);

@Component({
  selector: 'mat-hours-clock-dial',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: 'hours-clock-dial.html',
  styleUrls: ['clock-dial.scss'],
  exportAs: 'matHoursClockDial',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'mat-clock-dial mat-clock-dial-hours',
    '(mousedown)': '_onUserAction($event)',
    '(touchstart)': '_onUserAction($event)',
  },
})
export class MatHoursClockDial implements OnInit {
  /** Selected hour. */
  @Input()
  get selectedHour(): number {
    return this._selectedHour;
  }
  set selectedHour(value: number) {
    this._selectedHour = value;
  }
  private _selectedHour: number;

  /** Whether the clock uses 12 hour format. */
  @Input()
  get isMeridiem(): boolean {
    return this._isMeridiem;
  }
  set isMeridiem(value: boolean) {
    this._isMeridiem = value;
  }
  private _isMeridiem: boolean;

  @Input()
  get availableHours(): number[] {
    return this._availableHours;
  }
  set availableHours(value: number[]) {
    this._availableHours = value;
    this._initHours();
  }
  private _availableHours: number[] = [];

  /** Color palette. */
  @Input() color: ThemePalette;

  /** Whether the timepicker UI is in touch mode. */
  @Input()
  get touchUi(): boolean {
    return this._touchUi;
  }
  set touchUi(value: boolean) {
    this._touchUi = value;
    this._initHours();
  }
  private _touchUi: boolean;

  /** Emits selected hour. */
  @Output() selectedChange = new EventEmitter<{
    hour: number;
    changeView?: boolean;
  }>();

  hours: ClockDialViewCell[] = [];

  get disabledHand(): boolean {
    return !this.availableHours.includes(this.selectedHour);
  }

  get isHour(): boolean {
    return !!this.hours.find((hour) => hour.value === this.selectedHour);
  }

  constructor(
    private _element: ElementRef<HTMLElement>,
    private _cdr: ChangeDetectorRef,
    @Inject(DOCUMENT) private _document: Document,
    @Inject(Window) private _window: Window,
  ) {}

  ngOnInit(): void {
    this._initHours();
  }

  /** Hand styles based on selected hour. */
  _handStyles(): any {
    const deg = Math.round(this.selectedHour * (360 / (24 / 2)));
    const radius = this._getRadius(this.selectedHour);
    const height = radius;
    const marginTop = getClockRadius(this.touchUi) - radius;

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

    this._setHour(event);

    const eventsSubscription = merge(
      fromEvent<MouseEvent>(this._document, 'mousemove'),
      fromEvent<TouchEvent>(this._document, 'touchmove'),
    )
      .pipe(debounceTime(0))
      .subscribe({
        next: (event) => {
          event.preventDefault();
          this._setHour(event);
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
          this.selectedChange.emit({
            hour: this.selectedHour,
            changeView: true,
          });
        },
      });
  }

  _isActiveCell(hour: number): boolean {
    return this.selectedHour === hour;
  }

  /** Changes selected hour based on coordinates. */
  private _setHour(event: MouseEvent | TouchEvent): void {
    const element = this._element.nativeElement;
    const elementRect = element.getBoundingClientRect();
    const width = element.offsetWidth;
    const height = element.offsetHeight;
    const pageX = event instanceof MouseEvent ? event.pageX : event.touches[0].pageX;
    const pageY = event instanceof MouseEvent ? event.pageY : event.touches[0].pageY;
    const x = width / 2 - (pageX - elementRect.left - this._window.scrollX);
    const y = height / 2 - (pageY - elementRect.top - this._window.scrollY);
    const unit = Math.PI / 6;
    const atan2 = Math.atan2(-x, y);
    const radian = atan2 < 0 ? Math.PI * 2 + atan2 : atan2;
    const initialValue = Math.round(radian / unit);
    const z = Math.sqrt(x * x + y * y);
    const outer = z > getClockOuterRadius(this.touchUi) - getClockTickRadius(this.touchUi);
    const value = this._getHourValue(initialValue, outer);

    if (this.availableHours.includes(value)) {
      this.selectedHour = value;
      this.selectedChange.emit({
        hour: this.selectedHour,
      });
    }

    this._cdr.detectChanges();
  }

  /** Return value of hour. */
  private _getHourValue(value: number, outer: boolean): number {
    const edgeValue = value === 0 || value === 12;

    if (this.isMeridiem) {
      return edgeValue ? 12 : value;
    }

    if (outer) {
      return edgeValue ? 0 : value;
    }

    return edgeValue ? 12 : value + 12;
  }

  /** Creates list of hours. */
  private _initHours(): void {
    const initialHours = this.isMeridiem ? ALL_HOURS.slice(1, 13) : ALL_HOURS;

    this.hours = initialHours.map((hour) => {
      const radian = (hour / 6) * Math.PI;
      const radius = this._getRadius(hour);

      return {
        value: hour,
        displayValue: hour === 0 ? '00' : String(hour),
        left: getClockCorrectedRadius(this.touchUi) + Math.sin(radian) * radius,
        top: getClockCorrectedRadius(this.touchUi) - Math.cos(radian) * radius,
        disabled: !this.availableHours.includes(hour),
      };
    });
  }

  /** Returns radius based on hour */
  private _getRadius(hour: number): number {
    if (this.isMeridiem) {
      return getClockOuterRadius(this.touchUi);
    }

    const outer = hour >= 0 && hour < 12;
    const radius = outer ? getClockOuterRadius(this.touchUi) : getClockInnerRadius(this.touchUi);

    return radius;
  }
}
