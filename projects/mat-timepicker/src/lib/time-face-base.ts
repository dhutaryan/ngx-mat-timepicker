import {
  AfterContentInit,
  AfterViewChecked,
  Directive,
  EventEmitter,
  Input,
  Optional,
  Output,
} from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';

import { TimeAdapter } from './adapter';
import { MatTimePeriodType } from './time-period';
import { ALL_MINUTES } from './minutes-clock-dial';
import { ALL_HOURS } from './hours-clock-dial';
import { DOWN_ARROW, ENTER, SPACE, UP_ARROW } from '@angular/cdk/keycodes';

@Directive()
export abstract class MatTimeFaceBase<T>
  implements AfterContentInit, AfterViewChecked
{
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
    this.availableHours = ALL_HOURS;

    if (this.isMeridiem) {
      this.period = this._timeAdapter.getPeriod(this._selected);
    }

    this.availableMinutes = ALL_MINUTES;
    this._setMinHour();
    this._setMaxHour();
    this._setMinMinute();
    this._setMaxMinute();
    this._moveFocusOnNextTick = true;
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

  /** Step over minutes. */
  @Input()
  get minuteInterval(): number {
    return this._minuteInterval;
  }
  set minuteInterval(value: number) {
    this._minuteInterval = coerceNumberProperty(value) || 1;
  }
  private _minuteInterval: number = 1;

  /** Whether the clock uses 12 hour format. */
  @Input() isMeridiem: boolean;

  /** Color palette. */
  @Input() color: ThemePalette = 'primary';

  /** Emits when any hour, minute or period is selected. */
  @Output() _userSelection = new EventEmitter<T>();

  @Output() selectedChange = new EventEmitter<T>();

  selectedHour: number = 0;
  selectedMinute: number = 0;
  period: MatTimePeriodType;
  disabledPeriod: MatTimePeriodType | null = null;
  availableMinutes = ALL_MINUTES;
  availableHours = ALL_HOURS;

  /**
   * Used for scheduling that focus should be moved to the active cell on the next tick.
   * We need to schedule it, rather than do it immediately, because we have to wait
   * for Angular to re-evaluate the view children.
   */
  private _moveFocusOnNextTick = false;

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

  ngAfterViewChecked() {
    if (this._moveFocusOnNextTick) {
      this._moveFocusOnNextTick = false;
      this.focusActiveCell();
    }
  }

  /**
   * Focuses the active cell after or input the microtask queue is empty.
   *
   * Adding a 0ms setTimeout seems to fix Voiceover losing focus when pressing PageUp/PageDown.
   *
   * Determined a 0ms by gradually increasing duration from 0 and testing two use cases with screen
   * reader enabled:
   *
   * 1. Pressing PageUp/PageDown repeatedly with pausing between each key press.
   * 2. Pressing and holding the PageDown key with repeated keys enabled.
   *
   * Test 1 worked roughly 95-99% of the time with 0ms and got a little bit better as the duration
   * increased. Test 2 got slightly better until the duration was long enough to interfere with
   * repeated keys. If the repeated key speed was faster than the timeout duration, then pressing
   * and holding pagedown caused the entire page to scroll.
   *
   * Since repeated key speed can verify across machines, determined that any duration could
   * potentially interfere with repeated keys. 0ms would be best because it almost entirely
   * eliminates the focus being lost in Voiceover without causing unintended side effects.
   * Adding delay also complicates writing tests.
   */
  abstract focusActiveCell(): void;

  /** Handles hour selection. */
  _onHourSelected(hour: number): void {
    this.selectedHour = hour;
    const selected = this._timeAdapter.updateHour(
      this.selected!,
      this._getHourBasedOnPeriod(hour)
    );
    this._timeSelected(selected);
  }

  /** Handles minute selection. */
  _onMinuteSelected(minute: number): void {
    this.selectedMinute = minute;
    const selected = this._timeAdapter.updateMinute(this.selected!, minute);
    this._timeSelected(selected);
  }

  /** Handles period changing. */
  _onPeriodChanged(period: MatTimePeriodType): void {
    this.period = period;
    const selected = this._timeAdapter.updateHour(
      this.selected!,
      this._getHourBasedOnPeriod(this.selectedHour)
    );
    this._timeSelected(selected);
  }

  _getAvailableHours(): number[] {
    if (this.isMeridiem) {
      return this.availableHours
        .filter((h) => {
          if (this.period === 'am') {
            return h < 12;
          }

          if (this.period === 'pm') {
            return h >= 12;
          }

          return h;
        })
        .map((h) => {
          if (h > 12) {
            return h - 12;
          }

          if (h === 0) {
            return 12;
          }

          return h;
        });
    }

    return this.availableHours;
  }

  _onKeydown(event: KeyboardEvent, view: 'hour' | 'minute'): void {
    switch (view) {
      case 'hour':
        this._handleHourKeydown(event);
        break;
      case 'minute':
        this._handleMinuteKeydown(event);
        break;
    }
  }

  private _handleHourKeydown(event: KeyboardEvent): void {
    const hours = this._getAvailableHours();
    const selectedHourIndex = hours.findIndex(
      (hour) => hour === this.selectedHour
    );

    if (!hours.length) {
      return;
    }

    switch (event.keyCode) {
      case UP_ARROW:
        if (selectedHourIndex + 1 >= hours.length || selectedHourIndex < 0) {
          this._onHourSelected(hours[0]);
        } else {
          this._onHourSelected(hours[selectedHourIndex + 1]);
        }
        break;
      case DOWN_ARROW:
        if (selectedHourIndex - 1 < 0 || selectedHourIndex < 0) {
          this._onHourSelected(hours[hours.length - 1]);
        } else {
          this._onHourSelected(hours[selectedHourIndex - 1]);
        }
        break;
      default:
        break;
    }
  }

  private _handleMinuteKeydown(event: KeyboardEvent): void {
    const minutes = this.availableMinutes;
    const selectedMinuteIndex = minutes.findIndex(
      (minute) => minute === this.selectedMinute
    );

    if (!minutes.length) {
      return;
    }

    switch (event.keyCode) {
      case UP_ARROW:
        if (
          selectedMinuteIndex + this.minuteInterval >= minutes.length ||
          selectedMinuteIndex < 0
        ) {
          const difference =
            60 - this.selectedMinute + Math.min(...this.availableMinutes);
          const count = Math.ceil(difference / this.minuteInterval);
          const differenceForValid = count * this.minuteInterval;
          const nextValidValue = this.selectedMinute + differenceForValid;
          const correctIndex = minutes.findIndex(
            (minute) => minute === nextValidValue - 60 // amount of mins
          );
          this._onMinuteSelected(minutes[correctIndex]);
        } else {
          this._onMinuteSelected(
            minutes[selectedMinuteIndex + this.minuteInterval]
          );
        }
        break;
      case DOWN_ARROW:
        if (
          selectedMinuteIndex - this.minuteInterval < 0 ||
          selectedMinuteIndex < 0
        ) {
          const difference =
            60 + this.selectedMinute - Math.max(...this.availableMinutes);
          const count = Math.ceil(difference / this.minuteInterval);
          const differenceForValid = count * this.minuteInterval;
          const nextValidValue = this.selectedMinute - differenceForValid;
          const correctIndex = minutes.findIndex(
            (minute) => minute === nextValidValue + 60 // amount of mins
          );
          this._onMinuteSelected(minutes[correctIndex]);
        } else {
          this._onMinuteSelected(
            minutes[selectedMinuteIndex - this.minuteInterval]
          );
        }
        break;
      default:
        break;
    }
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

  private _timeSelected(value: T): void {
    if (value && !this._timeAdapter.sameTime(value, this.selected)) {
      this.selectedChange.emit(value);
    }

    this._userSelection.emit(value);
  }

  /** Sets min hour. */
  private _setMinHour(): void {
    if (!this.minTime) {
      return;
    }

    const minHour = this._timeAdapter.getHour(this.minTime);
    this.availableHours = this.availableHours.filter((h) => h >= minHour);
  }

  /** Sets max hour. */
  private _setMaxHour(): void {
    if (!this.maxTime) {
      return;
    }

    const maxHour = this._timeAdapter.getHour(this.maxTime);
    this.availableHours = this.availableHours.filter((h) => h <= maxHour);
  }

  /** Sets min minute. */
  private _setMinMinute(): void {
    if (!this.selected || !this.minTime) {
      return;
    }

    const selectedHour = this._timeAdapter.getHour(this.selected);
    const minHour = this._timeAdapter.getHour(this.minTime);

    const minMinute =
      selectedHour > minHour ? 0 : this._timeAdapter.getMinute(this.minTime);

    this.availableMinutes = this.availableMinutes.filter(
      (minute) => minute >= minMinute
    );

    if (selectedHour < minHour) {
      this.availableMinutes = [];
    }
  }

  /** Sets max minute. */
  private _setMaxMinute(): void {
    if (!this.selected || !this.maxTime) {
      return;
    }

    const selectedHour = this._timeAdapter.getHour(this.selected);
    const maxHour = this._timeAdapter.getHour(this.maxTime);

    const maxMinute =
      selectedHour < maxHour ? 59 : this._timeAdapter.getMinute(this.maxTime);

    this.availableMinutes = this.availableMinutes.filter(
      (minute) => minute <= maxMinute
    );

    if (selectedHour > maxHour) {
      this.availableMinutes = [];
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
