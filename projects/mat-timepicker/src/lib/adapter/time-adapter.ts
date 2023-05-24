import { InjectionToken, LOCALE_ID } from '@angular/core';
import { MatTimePeriodType } from '../time-period';

/** InjectionToken for timepicker that can be used to override default locale code. */
export const MAT_TIME_LOCALE = new InjectionToken<string>('MAT_TIME_LOCALE');

/** Provider for MAT_TIME_LOCALE injection token. */
export const MAT_TIME_LOCALE_PROVIDER = {
  provide: MAT_TIME_LOCALE,
  useExisting: LOCALE_ID,
};

export abstract class TimeAdapter<T, L = any> {
  /** The locale to use for time. */
  protected locale: L;

  /**
   * Gets now's time.
   * @returns Now's time.
   */
  abstract now(): T;

  /**
   * Parses a time from a user-provided value.
   * @param value The value to parse.
   * @param parseFormat The expected format of the value being parsed
   *     (type is implementation-dependent).
   * @returns The parsed time.
   */
  abstract parse(value: any, parseFormat: any): T | null;

  /**
   * Gets the hour component of the given time.
   * @param time The time to extract the hour from.
   * @returns The hour component.
   */
  abstract getHour(time: T): number;

  /**
   * Gets the minute component of the given time.
   * @param time The time to extract the minute from.
   * @returns The minute component.
   */
  abstract getMinute(time: T): number;

  /**
   * Update the hour component of the given time.
   * @param time The time to update the hour.
   * @param hour The new hour to update given time.
   * @returns The new time with updated hour component.
   */
  abstract updateHour(time: T, hour: number): T;

  /**
   * Update the minute component of the given time.
   * @param time The time to update the minute.
   * @param minute The new minute to update given time.
   * @returns The new time with updated minute component.
   */
  abstract updateMinute(time: T, minute: number): T;

  /**
   * Gets the period component of the given time.
   * @param time The time to extract the period from.
   * @returns The period component.
   */
  abstract getPeriod(time: T): MatTimePeriodType;

  /**
   * Formats a time as a string according to the given format.
   * @param time The value to format.
   * @param displayFormat The format to use to display the time as a string.
   * @returns The formatted time string.
   */
  abstract format(time: T, displayFormat: any): string;

  /**
   * Checks whether the given object is considered a time instance by this timeAdapter.
   * @param obj The object to check
   * @returns Whether the object is a time instance.
   */
  abstract isTimeInstance(obj: any): boolean;

  /**
   * Checks whether the given time is valid.
   * @param time The time to check.
   * @returns Whether the time is valid.
   */
  abstract isValid(time: T): boolean;

  /**
   * Gets time instance that is not valid.
   * @returns An invalid time.
   */
  abstract invalid(): T;

  /**
   * Given a potential time object, returns that same time object if it is
   * a valid time, or `null` if it's not a valid time.
   * @param obj The object to check.
   * @returns A time or `null`.
   */
  getValidTimeOrNull(obj: unknown): T | null {
    return this.isTimeInstance(obj) && this.isValid(obj as T)
      ? (obj as T)
      : null;
  }

  /**
   * Attempts to deserialize a value to a valid time object. The `<mat-timepicker>` will call this
   * method on all of its `@Input()` properties that accept time. It is therefore possible to
   * support passing values from your backend directly to these properties by overriding this method
   * to also deserialize the format used by your backend.
   * @param value The value to be deserialized into a time object.
   * @returns The deserialized time object, either a valid time, null if the value can be
   *     deserialized into a null time (e.g. the empty string), or an invalid date.
   */
  deserialize(value: any): T | null {
    if (value == null || (this.isTimeInstance(value) && this.isValid(value))) {
      return value;
    }
    return this.invalid();
  }

  /**
   * Sets the locale used for all time.
   * @param locale The new locale.
   */
  setLocale(locale: L) {
    this.locale = locale;
  }

  /**
   * Compares two time.
   * @param first The first time to compare.
   * @param second The second time to compare.
   * @returns 0 if the time are equal, a number less than 0 if the first time is earlier,
   *     a number greater than 0 if the first time is later.
   */
  abstract compareTime(first: T, second: T): number;

  /**
   * Checks if two time are equal.
   * @param first The first time to check.
   * @param second The second time to check.
   * @returns Whether the two time are equal.
   *     Null time are considered equal to other null time.
   */
  sameTime(first: T | null, second: T | null): boolean {
    if (first && second) {
      let firstValid = this.isValid(first);
      let secondValid = this.isValid(second);
      if (firstValid && secondValid) {
        return !this.compareTime(first, second);
      }
      return firstValid == secondValid;
    }
    return first == second;
  }

  /**
   * Clamp the given time between min and max time.
   * @param time The time to clamp.
   * @param min The minimum value to allow. If null or omitted no min is enforced.
   * @param max The maximum value to allow. If null or omitted no max is enforced.
   * @returns `min` if `time` is less than `min`, `max` if time is greater than `max`,
   *     otherwise `time`.
   */
  clampTime(time: T, min?: T | null, max?: T | null): T {
    if (min && this.compareTime(time, min) < 0) {
      return min;
    }
    if (max && this.compareTime(time, max) > 0) {
      return max;
    }
    return time;
  }
}
