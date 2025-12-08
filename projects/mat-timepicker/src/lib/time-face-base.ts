import {
  AfterContentInit,
  AfterViewChecked,
  computed,
  Directive,
  input,
  linkedSignal,
  model,
  Optional,
  output,
  untracked,
} from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { coerceNumberProperty, NumberInput } from '@angular/cdk/coercion';
import { DOWN_ARROW, UP_ARROW } from '@angular/cdk/keycodes';

import { TimeAdapter } from './adapter';
import { MatTimePeriodType } from './time-period';
import { ALL_MINUTES } from './minutes-clock-dial';
import { ALL_HOURS } from './hours-clock-dial';

@Directive()
export abstract class MatTimeFaceBase<T>
  implements AfterContentInit, AfterViewChecked
{
  /** The currently selected time. */
  readonly selected = model<T | null>();
  readonly selectedInternal = computed(
    () =>
      this._timeAdapter.getValidTimeOrNull(
        this._timeAdapter.deserialize(this.selected()),
      ),
    { equal: (a, b) => this._timeAdapter.sameTime(a, b) },
  );

  /** The minimum selectable time. */
  readonly minTime = input(null, {
    transform: (value: T | null) =>
      this._timeAdapter.getValidTimeOrNull(
        this._timeAdapter.deserialize(value),
      ),
  });

  /** The maximum selectable time. */
  readonly maxTime = input(null, {
    transform: (value: T | null) =>
      this._timeAdapter.getValidTimeOrNull(
        this._timeAdapter.deserialize(value),
      ),
  });

  /** Step over minutes. */
  readonly minuteInterval = input(1, {
    transform: (value: NumberInput) => coerceNumberProperty(value) || 1,
  });

  /** Whether the clock uses 12 hour format. */
  readonly isMeridiem = input<boolean>(false);

  /** Color palette. */
  readonly color = input<ThemePalette>('primary');

  /** Emits when any hour, minute or period is selected. */
  readonly _userSelection = output<T>();

  readonly selectedHour = linkedSignal(() => {
    const selected = this.selectedInternal();
    if (!selected) {
      return 0;
    }
    const hour = this._timeAdapter.getHour(selected);
    if (hour === 0 && this.isMeridiem()) {
      return 12;
    }
    return hour > 12 && this.isMeridiem() ? hour - 12 : hour;
  });

  readonly selectedMinute = linkedSignal(() => {
    const selected = this.selectedInternal();
    if (!selected) {
      return 0;
    }
    return this._timeAdapter.getMinute(selected);
  });

  readonly period = linkedSignal(() => {
    const isMeridiem = this.isMeridiem();
    const selected = this.selectedInternal();
    return isMeridiem && selected
      ? this._timeAdapter.getPeriod(selected)
      : 'am';
  });

  readonly disabledPeriod = computed(() =>
    this._getDisabledPeriod(this.minTime(), this.maxTime()),
  );

  readonly availableMinutes = computed(() =>
    this._prepareAvailableMinutes(
      this.selectedInternal(),
      this.minTime(),
      this.maxTime(),
    ),
  );

  readonly availableHours = computed(() =>
    this._prepareAvailableHours(this.minTime(), this.maxTime()),
  );

  readonly availableHoursWithMeridiem = computed(() => {
    const availableHours = this.availableHours();
    return this.isMeridiem()
      ? this._getAvailableHoursForPeriod(availableHours, this.period())
      : availableHours;
  });

  /**
   * Used for scheduling that focus should be moved to the active cell on the next tick.
   * We need to schedule it, rather than do it immediately, because we have to wait
   * for Angular to re-evaluate the view children.
   */
  private readonly _moveFocusOnNextTick = linkedSignal({
    source: this.selectedInternal,
    computation: (selected) => (selected ? untracked(this.isMeridiem) : false),
  });

  protected constructor(@Optional() protected _timeAdapter: TimeAdapter<T>) {}

  ngAfterContentInit() {
    if (!this.selected()) {
      const time = this._timeAdapter.clampTime(
        this._timeAdapter.now(),
        this.minTime(),
        this.maxTime(),
      );
      this.selected.set(time);
      this._userSelection.emit(time);
    }
  }

  ngAfterViewChecked() {
    if (this._moveFocusOnNextTick()) {
      this._moveFocusOnNextTick.set(false);
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
    this.selectedHour.set(hour);
    const selected = this._timeAdapter.updateHour(
      this.selectedInternal()!,
      this._getHourBasedOnPeriod(hour),
    );
    this._timeSelected(selected);
  }

  /** Handles minute selection. */
  _onMinuteSelected(minute: number): void {
    this.selectedMinute.set(minute);
    const selected = this._timeAdapter.updateMinute(
      this.selectedInternal()!,
      minute,
    );
    this._timeSelected(selected);
  }

  /** Handles period changing. */
  _onPeriodChanged(period: MatTimePeriodType): void {
    this.period.set(period);
    const selected = this._timeAdapter.updateHour(
      this.selectedInternal()!,
      this._getHourBasedOnPeriod(this.selectedHour()),
    );
    this._timeSelected(selected);
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

  private _getAvailableHoursForPeriod(
    availableHours: number[],
    period: MatTimePeriodType,
  ): number[] {
    return availableHours
      .filter((h) => {
        if (period === 'am') {
          return h < 12;
        }

        if (period === 'pm') {
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

  private _handleHourKeydown(event: KeyboardEvent): void {
    const hours = this.availableHoursWithMeridiem();
    const selectedHourIndex = hours.findIndex(
      (hour) => hour === this.selectedHour(),
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
    const minutes = this.availableMinutes();
    const selectedMinuteIndex = minutes.findIndex(
      (minute) => minute === this.selectedMinute(),
    );

    if (!minutes.length) {
      return;
    }

    switch (event.keyCode) {
      case UP_ARROW:
        if (
          selectedMinuteIndex + this.minuteInterval() >= minutes.length ||
          selectedMinuteIndex < 0
        ) {
          const difference =
            60 - this.selectedMinute() + Math.min(...this.availableMinutes());
          const count = Math.ceil(difference / this.minuteInterval());
          const differenceForValid = count * this.minuteInterval();
          const nextValidValue = this.selectedMinute() + differenceForValid;
          const correctIndex = minutes.findIndex(
            (minute) => minute === nextValidValue - 60, // amount of mins
          );
          this._onMinuteSelected(minutes[correctIndex]);
        } else {
          this._onMinuteSelected(
            minutes[selectedMinuteIndex + this.minuteInterval()],
          );
        }
        break;
      case DOWN_ARROW:
        if (
          selectedMinuteIndex - this.minuteInterval() < 0 ||
          selectedMinuteIndex < 0
        ) {
          const difference =
            60 + this.selectedMinute() - Math.max(...this.availableMinutes());
          const count = Math.ceil(difference / this.minuteInterval());
          const differenceForValid = count * this.minuteInterval();
          const nextValidValue = this.selectedMinute() - differenceForValid;
          const correctIndex = minutes.findIndex(
            (minute) => minute === nextValidValue + 60, // amount of mins
          );
          this._onMinuteSelected(minutes[correctIndex]);
        } else {
          this._onMinuteSelected(
            minutes[selectedMinuteIndex - this.minuteInterval()],
          );
        }
        break;
      default:
        break;
    }
  }

  /** Gets a correct hours based on meridiem and period. */
  private _getHourBasedOnPeriod(hour: number): number {
    const afterNoon = this.isMeridiem() && this.period() === 'pm';
    const beforeNoon = this.isMeridiem() && this.period() === 'am';

    if (afterNoon) {
      return hour === 12 ? hour : hour + 12;
    }

    if (beforeNoon) {
      return hour === 12 ? 0 : hour;
    }

    return hour;
  }

  private _timeSelected(value: T): void {
    if (value && !this._timeAdapter.sameTime(value, this.selectedInternal())) {
      this.selected.set(value);
    }

    this._userSelection.emit(value);
  }

  /**
   * Retrieves a filtered list of available hours within the specified minimum and maximum bounds.
   *
   * @param min - The minimum time bound or null if no minimum is specified.
   * @param max - The maximum time bound or null if no maximum is specified.
   * @return {number[]} An array of available hours that satisfy the specified constraints.
   */
  private _prepareAvailableHours(min: T | null, max: T | null): number[] {
    const filters: ((hour: number) => boolean)[] = [];
    if (min) {
      const minHour = this._timeAdapter.getHour(min);
      filters.push((hour) => hour >= minHour);
    }
    if (max) {
      const maxHour = this._timeAdapter.getHour(max);
      filters.push((hour) => hour <= maxHour);
    }
    return ALL_HOURS.filter((v) => filters.every((f) => f(v)));
  }

  /**
   * Prepares and filters the available minutes based on the selected time,
   * minimum time, and maximum time constraints.
   *
   * @param selected The currently selected time, or null if not set.
   * @param min The minimum time to constrain the available minutes, or null if no minimum constraint.
   * @param max The maximum time to constrain the available minutes, or null if no maximum constraint.
   * @return {number[]} The array of minutes that are available based on the applied constraints.
   */
  private _prepareAvailableMinutes(
    selected: T | null,
    min: T | null,
    max: T | null,
  ): number[] {
    const filters: ((hour: number) => boolean)[] = [];

    if (selected && min) {
      const selectedHour = this._timeAdapter.getHour(selected);
      const minHour = this._timeAdapter.getHour(min);

      const minMinute =
        selectedHour > minHour ? 0 : this._timeAdapter.getMinute(min);

      if (selectedHour < minHour) {
        return [];
      }

      filters.push((minute) => minute >= minMinute);
    }

    if (selected && max) {
      const selectedHour = this._timeAdapter.getHour(selected);
      const maxHour = this._timeAdapter.getHour(max);

      const maxMinute =
        selectedHour < maxHour ? 59 : this._timeAdapter.getMinute(max);

      if (selectedHour > maxHour) {
        return [];
      }

      filters.push((minute) => minute <= maxMinute);
    }

    return ALL_MINUTES.filter((v) => filters.every((f) => f(v)));
  }

  /** Sets disabled period. */
  private _getDisabledPeriod(
    minTime: T | null,
    maxTime: T | null,
  ): MatTimePeriodType | null {
    if (minTime) {
      const minHour = this._timeAdapter.getHour(minTime);

      if (minHour >= 12) {
        return 'am';
      }
    }

    if (maxTime) {
      const maxHour = this._timeAdapter.getHour(maxTime);
      const maxMinute = this._timeAdapter.getHour(maxTime);

      if (maxHour < 12 || (maxHour === 12 && maxMinute === 0)) {
        return 'pm';
      }
    }

    return null;
  }
}
