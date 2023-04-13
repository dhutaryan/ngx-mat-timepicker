import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  OnInit,
  OnDestroy,
  Input,
  Optional,
  Output,
  EventEmitter,
} from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { TimeAdapter } from './adapter';
import { MatTimePeriodType } from './time-period';

export type MatDialView = 'hours' | 'minutes';

@Component({
  selector: 'mat-clock-dials',
  templateUrl: './clock-dials.html',
  styleUrls: ['./clock-dials.scss'],
  exportAs: 'matClockDials',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'mat-clock-dials',
  },
})
export class MatClockDials<T> implements OnInit, OnDestroy {
  /** The currently selected time. */
  @Input()
  get selected(): T | null {
    return this._selected;
  }
  set selected(value: T | null) {
    this._selected = this._timeAdapter.getValidTimeOrNull(
      this._timeAdapter.deserialize(value)
    );

    if (!this._selected) {
      this._selected = this._timeAdapter.now();
    }

    const hour = this._timeAdapter.getHour(this._selected);
    this.selectedHour = hour > 12 && this.isMeridiem ? hour - 12 : hour;
    this.selectedMinute = this._timeAdapter.getMinute(this._selected);

    if (this.isMeridiem) {
      this.period = this._timeAdapter.getPeriod(this._selected);
    }
  }
  private _selected: T | null;

  /** Whether the clock uses 12 hour format. */
  @Input() isMeridiem: boolean;

  /** Emits when any hour, minute or period is selected. */
  @Output() _userSelection = new EventEmitter<T>();

  isHoursView = true;
  selectedHour: number = 0;
  selectedMinute: number = 0;
  period: MatTimePeriodType;

  /** Specifies the view of clock dial. */
  private readonly _view = new BehaviorSubject<MatDialView>('hours');
  private _viewSubscription: Subscription | null = Subscription.EMPTY;

  constructor(@Optional() private _timeAdapter: TimeAdapter<T>) {}

  ngOnInit(): void {
    this._viewSubscription = this._view.subscribe(
      (view) => (this.isHoursView = view === 'hours')
    );
  }

  ngOnDestroy(): void {
    this._viewSubscription?.unsubscribe();
    this._viewSubscription = null;
  }

  /** Changes clock dial view. */
  onViewChange(view: MatDialView): void {
    this._view.next(view);
  }

  _withZeroPrefix(value: number): string | number {
    const newValue = this.isMeridiem && value === 0 ? 12 : value;

    return newValue < 10 ? `0${newValue}` : newValue;
  }

  /** Handles hour selection. */
  _onHourSelected(hour: number): void {
    this._view.next('minutes');
    this.selectedHour = hour;
    const selected = this._timeAdapter.updateHour(
      this.selected!,
      this._getHourBasedOnPeriod(hour)
    );
    this._emitUserSelection(selected);
  }

  /** Handles minute selection. */
  _onMinuteSelected(minute: number): void {
    this.selectedMinute = minute;
    const selected = this._timeAdapter.updateMinute(this.selected!, minute);
    this._emitUserSelection(selected);
  }

  /** Handles period changing. */
  _onPeriodChanged(period: MatTimePeriodType): void {
    this.period = period;
    const selected = this._timeAdapter.updateHour(
      this.selected!,
      this._getHourBasedOnPeriod(this.selectedHour)
    );
    this._emitUserSelection(selected);
  }

  /** Gets a correct hours based on meridiem and period. */
  private _getHourBasedOnPeriod(hour: number): number {
    const afterNoon = this.isMeridiem && this.period === 'pm';
    const beforeNoon = this.isMeridiem && this.period === 'am';

    if (afterNoon) {
      return hour === 12 ? hour : hour + 12;
    }

    if (beforeNoon) {
      return hour === 12 ? 0 : hour;
    }

    return hour;
  }

  private _emitUserSelection(value: T): void {
    this._userSelection.emit(value);
  }
}
