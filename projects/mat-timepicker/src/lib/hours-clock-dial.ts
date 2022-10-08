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
import { debounceTime, fromEvent, merge, Subject, takeUntil } from 'rxjs';

interface HourViewCell {
  value: number;
  displayValue: number;
  left: number;
  top: number;
}

const HOURS = Array(12)
  .fill(null)
  .map((_, i) => i + 1);
const CLOCK_RADIUS = 128;
const CLOCK_TICK_RADIUS = 16;
const CLOCK_CORRECTED_RADIUS = CLOCK_RADIUS - CLOCK_TICK_RADIUS;
const CLOCK_OUTER_RADIUS = 100;

@Component({
  selector: 'mat-hours-clock-dial',
  templateUrl: 'hours-clock-dial.html',
  styleUrls: ['hours-clock-dial.scss'],
  exportAs: 'matHoursClockDial',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'mat-hours-clock-dial',
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
    this._selectedHour = value === 0 ? 12 : value;
  }
  private _selectedHour = 0;

  /** Emits selected hour. */
  @Output() selectedChange = new EventEmitter<number>();

  public hours: HourViewCell[] = [];

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
    const deg = Math.round(this._selectedHour * (360 / (24 / 2)));
    const height = CLOCK_OUTER_RADIUS;
    const marginTop = CLOCK_RADIUS - CLOCK_OUTER_RADIUS;

    return {
      transform: `rotate(${deg}deg)`,
      height: `${height}px`,
      'margin-top': `${marginTop}px`,
    };
  }

  /** Handles mouse and touch events on dial and document. */
  _onMouseDown(event: MouseEvent | TouchEvent): void {
    this._setHour(event);
    const destroy = new Subject();

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
        complete: () => {
          destroy.next(true);
          destroy.complete();
        },
      });

    merge(
      fromEvent<MouseEvent>(this._document, 'mouseup'),
      fromEvent<TouchEvent>(this._document, 'touchend')
    )
      .pipe(takeUntil(destroy))
      .subscribe({
        next: () => {
          eventsSubscription.unsubscribe();
          this.selectedChange.emit(this._selectedHour);
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
    const value = initialValue === 0 ? 12 : initialValue;
    this._selectedHour = value;
    this._cdr.detectChanges();
  }

  /** Creates list of hours. */
  private _initHours(): void {
    this.hours = HOURS.map((hour) => {
      const radian = (hour / 6) * Math.PI;

      return {
        value: hour,
        displayValue: hour,
        left: CLOCK_CORRECTED_RADIUS + Math.sin(radian) * CLOCK_OUTER_RADIUS,
        top: CLOCK_CORRECTED_RADIUS - Math.cos(radian) * CLOCK_OUTER_RADIUS,
      };
    });
  }
}
