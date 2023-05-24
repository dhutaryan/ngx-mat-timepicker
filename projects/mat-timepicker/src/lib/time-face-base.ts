import {
  Directive,
  EventEmitter,
  Input,
  Optional,
  Output,
} from '@angular/core';
import { TimeAdapter } from './adapter';
import { MatTimePeriodType } from './time-period';

@Directive()
export abstract class MatTimeFaceBase<T> {
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
      return;
    }

    const hour = this._timeAdapter.getHour(this._selected);
    this.selectedHour = hour > 12 && this.isMeridiem ? hour - 12 : hour;
    if (hour === 0 && this.isMeridiem) {
      this.selectedHour = 12;
    }
    this.selectedMinute = this._timeAdapter.getMinute(this._selected);

    if (this.isMeridiem) {
      this.period = this._timeAdapter.getPeriod(this._selected);
    }

    this._setMinHour();
    this._setMaxHour();
    this._setMinMinute();
    this._setMaxMinute();
  }
  private _selected: T | null;

  /** The minimum selectable time. */
  @Input()
  get minTime(): T | null {
    return this._minTime;
  }
  set minTime(value: T | null) {
    this._minTime = this._timeAdapter.getValidTimeOrNull(
      this._timeAdapter.deserialize(value)
    );

    if (value) {
      this._setMinHour();
      this._setMinMinute();
      this._setDisabledPeriod();
    }
  }
  private _minTime: T | null;

  /** The maximum selectable time. */
  @Input()
  get maxTime(): T | null {
    return this._maxTime;
  }
  set maxTime(value: T | null) {
    this._maxTime = this._timeAdapter.getValidTimeOrNull(
      this._timeAdapter.deserialize(value)
    );

    if (value) {
      this._setMaxHour();
      this._setMaxMinute();
      this._setDisabledPeriod();
    }
  }
  private _maxTime: T | null;

  /** Whether the clock uses 12 hour format. */
  @Input() isMeridiem: boolean;

  /** Emits when any hour, minute or period is selected. */
  @Output() _userSelection = new EventEmitter<T>();

  selectedHour: number = 0;
  selectedMinute: number = 0;
  period: MatTimePeriodType;
  minHour: number;
  maxHour: number;
  minMinute: number;
  maxMinute: number;
  disabledPeriod: MatTimePeriodType | null = null;
  /** Used for am to include 00:00. */
  include12Hour: boolean = false;
  /** Used for pm to exclude 12:00 if min > 12:00. */
  exclude12Hour: boolean = false;

  constructor(@Optional() protected _timeAdapter: TimeAdapter<T>) {}

  ngAfterContentInit() {
    if (!this.selected) {
      this.selected = this._timeAdapter.clampTime(
        this._timeAdapter.now(),
        this.minTime,
        this.maxTime
      );
    }
  }

  /** Handles hour selection. */
  _onHourSelected(hour: number): void {
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

  /** Sets min hour. */
  private _setMinHour(): void {
    if (!this.minTime) {
      this.include12Hour = this.isMeridiem;
      return;
    }

    const hour = this._timeAdapter.getHour(this.minTime);
    this.minHour = hour > 12 && this.isMeridiem ? hour - 12 : hour;
    this.include12Hour = false;
    this.exclude12Hour = false;

    if (this.period === 'pm') {
      if (hour === 12 || hour < 12) {
        this.include12Hour = true;
        this.minHour = 1; // because 12pm more than 1pm by numeric
      }

      if (hour > 12) {
        this.exclude12Hour = true;
      }
    }

    if (this.period === 'am') {
      if (hour >= 12) {
        this.minHour = 13; // any number which is more than 12
      }

      if (hour > 0) {
        this.exclude12Hour = true; // to exclude 12am
      }

      if (hour === 0) {
        this.include12Hour = true;
      }
    }
  }

  /** Sets max hour. */
  private _setMaxHour(): void {
    if (!this.maxTime) {
      return;
    }

    const hour = this._timeAdapter.getHour(this.maxTime);
    this.maxHour = hour > 12 && this.isMeridiem ? hour - 12 : hour;

    if (this.period === 'am') {
      if (this.minHour > 0) {
        this.exclude12Hour = true; // to exclude 12am
      }

      if (hour >= 12) {
        this.maxHour = 11;
      }
    }

    if (this.period === 'pm') {
      if (hour < 12) {
        this.include12Hour = false; // to disable 12:00 if no min time
        this.maxHour = 0; // should less than 1 (13:00)
      }

      if (this._getHourBasedOnPeriod(this.minHour) < 12 && hour >= 12) {
        this.include12Hour = true;
      }

      if (hour === 12) {
        this.minHour = 12;
      }
    }
  }

  /** Sets min minute. */
  private _setMinMinute(): void {
    if (!this.selected || !this.minTime) {
      return;
    }

    const selectedHour = this._timeAdapter.getHour(this.selected);
    const minHour = this._timeAdapter.getHour(this.minTime);

    this.minMinute =
      selectedHour > minHour ? 0 : this._timeAdapter.getMinute(this.minTime);

    if (selectedHour < minHour) {
      this.minMinute = 60; // any number more than 59
    }
  }

  /** Sets max minute. */
  private _setMaxMinute(): void {
    if (!this.selected || !this.maxTime) {
      return;
    }

    const selectedHour = this._timeAdapter.getHour(this.selected);
    const minHour = this._timeAdapter.getHour(this.maxTime);
    const maxHour = this._timeAdapter.getHour(this.maxTime);

    this.maxMinute =
      selectedHour < maxHour ? 59 : this._timeAdapter.getMinute(this.maxTime);

    if (selectedHour > maxHour) {
      this.maxMinute = -1; // any number less than 0
    }
  }

  /** Sets disabled period. */
  private _setDisabledPeriod(): void {
    if (this.minTime) {
      const minHour = this._timeAdapter.getHour(this.minTime);

      if (minHour >= 12) {
        this.disabledPeriod = 'am';
      }
    }

    if (this.maxTime) {
      const maxHour = this._timeAdapter.getHour(this.maxTime);
      const maxMinute = this._timeAdapter.getHour(this.maxTime);

      if (maxHour < 12 || (maxHour === 12 && maxMinute === 0)) {
        this.disabledPeriod = 'pm';
      }
    }
  }
}
