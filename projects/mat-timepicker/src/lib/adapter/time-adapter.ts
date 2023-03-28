import { InjectionToken, LOCALE_ID } from '@angular/core';

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
   * Parses a time from a user-provided value.
   * @param value The value to parse.
   * @param parseFormat The expected format of the value being parsed
   *     (type is implementation-dependent).
   * @returns The parsed time.
   */
  abstract parse(value: any, parseFormat: any): T | null;

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
  compareDate(first: T, second: T): number {
    return 1;
    // return (
    //   this.getYear(first) - this.getYear(second) ||
    //   this.getMonth(first) - this.getMonth(second) ||
    //   this.getDate(first) - this.getDate(second)
    // );
  }

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
        return !this.compareDate(first, second);
      }
      return firstValid == secondValid;
    }
    return first == second;
  }
}
