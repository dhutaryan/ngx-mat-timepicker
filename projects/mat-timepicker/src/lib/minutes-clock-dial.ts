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
import { debounceTime, fromEvent, merge, Subject, take, takeUntil } from 'rxjs';

import { ClockDialViewCell } from './hours-clock-dial';

const MINUTES = Array(60)
  .fill(null)
  .map((_, i) => i);

const CLOCK_RADIUS = 128;
const CLOCK_TICK_RADIUS = 16;
const CLOCK_CORRECTED_RADIUS = CLOCK_RADIUS - CLOCK_TICK_RADIUS;
const CLOCK_OUTER_RADIUS = 100;

@Component({
  selector: 'mat-minutes-clock-dial',
  templateUrl: 'minutes-clock-dial.html',
  styleUrls: ['clock-dial.scss'],
  exportAs: 'matMinutesClockDial',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'mat-clock-dial',
    '(mousedown)': '_onMouseDown($event)',
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

  /** Emits selected minute. */
  @Output() selectedChange = new EventEmitter<number>();

  public minutes: ClockDialViewCell[] = [];

  constructor(
    private _element: ElementRef<HTMLElement>,
    private _cdr: ChangeDetectorRef,
    @Inject(DOCUMENT) private _document: Document,
    @Inject(Window) private _window: Window
  ) {}

  ngOnInit(): void {
    this._initMinutes();
  }

  /** Hand styles based on selected minute. */
  _handStyles(): any {
    const deg = Math.round(this._selectedMinute * (360 / 60));
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
    this._setMinute(event);

    const eventsSubscription = merge(
      fromEvent<MouseEvent>(this._document, 'mousemove'),
      fromEvent<TouchEvent>(this._document, 'touchmove')
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
      fromEvent<TouchEvent>(this._document, 'touchend')
    )
      .pipe(take(1))
      .subscribe({
        next: () => {
          eventsSubscription.unsubscribe();
          this.selectedChange.emit(this._selectedMinute);
        },
      });
  }

  private _setMinute(event: MouseEvent | TouchEvent): void {
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
    const unit = Math.PI / 30;
    const atan2 = Math.atan2(-x, y);
    const radian = atan2 < 0 ? Math.PI * 2 + atan2 : atan2;
    const initialValue = Math.round(radian / unit);
    const value = initialValue === 60 ? 0 : initialValue;
    this._selectedMinute = value;
    this._cdr.detectChanges();
  }

  /** Creates list of minutes. */
  private _initMinutes(): void {
    this.minutes = MINUTES.filter((minute) => minute % 5 === 0).map(
      (minute) => {
        const radian = (minute / 30) * Math.PI;
        const displayValue = minute === 0 ? '00' : String(minute);

        return {
          value: minute,
          displayValue,
          left: CLOCK_CORRECTED_RADIUS + Math.sin(radian) * CLOCK_OUTER_RADIUS,
          top: CLOCK_CORRECTED_RADIUS - Math.cos(radian) * CLOCK_OUTER_RADIUS,
        };
      }
    );
  }
}
