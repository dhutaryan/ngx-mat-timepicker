import { DOCUMENT } from '@angular/common';
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
import { debounceTime, fromEvent, merge, take } from 'rxjs';

export interface ClockDialViewCell {
  value: number;
  displayValue: string;
  left: number;
  top: number;
  disabled: boolean;
}

const HOURS = Array(24)
  .fill(null)
  .map((_, i) => i);
const CLOCK_RADIUS = 128;
const CLOCK_TICK_RADIUS = 16;
const CLOCK_CORRECTED_RADIUS = CLOCK_RADIUS - CLOCK_TICK_RADIUS;
const CLOCK_OUTER_RADIUS = 100;
const CLOCK_INNER_RADIUS = CLOCK_OUTER_RADIUS - CLOCK_TICK_RADIUS * 2;

@Component({
  selector: 'mat-hours-clock-dial',
  templateUrl: 'hours-clock-dial.html',
  styleUrls: ['clock-dial.scss'],
  exportAs: 'matHoursClockDial',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'mat-clock-dial mat-clock-dial-hours',
    '(mousedown)': '_onMouseDown($event)',
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

  /** Min hour value. */
  @Input()
  get minHour(): number {
    return this._minHour;
  }
  set minHour(value: number) {
    this._minHour = value;
    this._initHours();
  }
  private _minHour: number;

  /** Max hour value. */
  @Input()
  get maxHour(): number {
    return this._maxHour;
  }
  set maxHour(value: number) {
    this._maxHour = value;
    this._initHours();
  }
  private _maxHour: number;

  @Input()
  get include12Hour(): boolean {
    return this._include12Hour;
  }
  set include12Hour(value: boolean) {
    this._include12Hour = value;
    this._initHours();
  }
  private _include12Hour: boolean;

  @Input()
  get exclude12Hour(): boolean {
    return this._exclude12Hour;
  }
  set exclude12Hour(value: boolean) {
    this._exclude12Hour = value;
    this._initHours();
  }
  private _exclude12Hour: boolean;

  /** Emits selected hour. */
  @Output() selectedChange = new EventEmitter<number>();

  hours: ClockDialViewCell[] = [];

  get disabledHand(): boolean {
    if (this.selectedHour === 12 && this.include12Hour) {
      return false;
    }

    return this.selectedHour < this.minHour || this.selectedHour > this.maxHour;
  }

  get isHour(): boolean {
    return !!this.hours.find((hour) => hour.value === this.selectedHour);
  }

  constructor(
    private _element: ElementRef<HTMLElement>,
    private _cdr: ChangeDetectorRef,
    @Inject(DOCUMENT) private _document: Document,
    @Inject(Window) private _window: Window
  ) {}

  ngOnInit(): void {
    this._initHours();
  }

  /** Hand styles based on selected hour. */
  _handStyles(): any {
    const deg = Math.round(this.selectedHour * (360 / (24 / 2)));
    const radius = this._getRadius(this.selectedHour);
    const height = radius;
    const marginTop = CLOCK_RADIUS - radius;

    return {
      transform: `rotate(${deg}deg)`,
      height: `${height}px`,
      'margin-top': `${marginTop}px`,
    };
  }

  /** Handles mouse and touch events on dial and document. */
  _onMouseDown(event: MouseEvent | TouchEvent): void {
    this._setHour(event);

    const eventsSubscription = merge(
      fromEvent<MouseEvent>(this._document, 'mousemove'),
      fromEvent<TouchEvent>(this._document, 'touchmove')
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
      fromEvent<TouchEvent>(this._document, 'touchend')
    )
      .pipe(take(1))
      .subscribe({
        next: () => {
          eventsSubscription.unsubscribe();
          this.selectedChange.emit(this.selectedHour);
        },
      });
  }

  /** Changes selected hour based on coordinates. */
  private _setHour(event: MouseEvent | TouchEvent): void {
    const element = this._element.nativeElement;
    const elementRect = element.getBoundingClientRect();
    const width = element.offsetWidth;
    const height = element.offsetHeight;
    const pageX =
      event instanceof MouseEvent ? event.pageX : event.touches[0].pageX;
    const pageY =
      event instanceof MouseEvent ? event.pageY : event.touches[0].pageY;
    const x = width / 2 - (pageX - elementRect.left - this._window.scrollX);
    const y = height / 2 - (pageY - elementRect.top - this._window.scrollY);
    const unit = Math.PI / 6;
    const atan2 = Math.atan2(-x, y);
    const radian = atan2 < 0 ? Math.PI * 2 + atan2 : atan2;
    const initialValue = Math.round(radian / unit);
    const z = Math.sqrt(x * x + y * y);
    const outer = z > CLOCK_OUTER_RADIUS - CLOCK_TICK_RADIUS;
    const value = this._getHourValue(initialValue, outer);

    const isValue12 = value === 12;
    const moreMin = value >= this.minHour || isNaN(Number(this.minHour));
    const lessMax = value <= this.maxHour || isNaN(Number(this.maxHour));
    const hasMinHour12 = isValue12 && this.include12Hour;
    const hasMaxHour12 = isValue12 && !this.exclude12Hour;

    if (
      ((moreMin && !isValue12) || hasMaxHour12) &&
      (lessMax || hasMinHour12)
    ) {
      this.selectedHour = value;
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
    const initialHours = this.isMeridiem ? HOURS.slice(1, 13) : HOURS;

    this.hours = initialHours.map((hour) => {
      const radian = (hour / 6) * Math.PI;
      const radius = this._getRadius(hour);
      const lessMinHour = !isNaN(Number(this.minHour)) && hour < this.minHour;
      const moreMaxHour = !isNaN(Number(this.maxHour)) && hour > this.maxHour;
      const isHour12 = hour === 12;
      const hasMinHour12 = isHour12 && this.include12Hour;
      const hasMaxHour12 = isHour12 && this.exclude12Hour;

      return {
        value: hour,
        displayValue: hour === 0 ? '00' : String(hour),
        left: CLOCK_CORRECTED_RADIUS + Math.sin(radian) * radius,
        top: CLOCK_CORRECTED_RADIUS - Math.cos(radian) * radius,
        disabled: lessMinHour || (moreMaxHour && !hasMinHour12) || hasMaxHour12,
      };
    });
  }

  /** Returns radius based on hour */
  private _getRadius(hour: number): number {
    if (this.isMeridiem) {
      return CLOCK_OUTER_RADIUS;
    }

    const outer = hour >= 0 && hour < 12;
    const radius = outer ? CLOCK_OUTER_RADIUS : CLOCK_INNER_RADIUS;

    return radius;
  }
}
