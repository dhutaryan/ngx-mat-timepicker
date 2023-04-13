import { DOCUMENT } from '@angular/common';
import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  Input,
  Optional,
  Output,
  EventEmitter,
  Directive,
  ElementRef,
  ChangeDetectorRef,
  Inject,
} from '@angular/core';

import { TimeAdapter } from './adapter';
import { MatTimePeriodType } from './time-period';

@Directive({
  selector: 'input[matTimeInput]',
  exportAs: 'matTimeInput',
  host: {
    class: 'mat-time-input',
    '(focus)': 'focus($event)',
    '(blur)': 'blur($event)',
  },
})
export class MatTimeInput {
  @Input()
  get min(): number {
    return this._min;
  }
  set min(value: number) {
    this._min = value;
  }
  private _min = 0;

  @Input()
  get max(): number {
    return this._max;
  }
  set max(value: number) {
    this._max = value;
  }
  private _max = Infinity;

  @Input()
  get value(): number {
    return this._value;
  }
  set value(value: number) {
    this._value = value;
    if (!this.hasFocus) {
      this.setInputValue(this._value);
    }
    this.setInputPlaceholder(this._value);
  }
  private _value: number;

  @Input() isMeridiem: boolean;

  @Output() timeChanged = new EventEmitter<number>();

  get inputElement() {
    return this.element.nativeElement as HTMLInputElement;
  }

  get hasFocus() {
    return this.element?.nativeElement === this._document.activeElement;
  }

  constructor(
    private element: ElementRef<HTMLInputElement>,
    private cdr: ChangeDetectorRef,
    @Inject(DOCUMENT) private _document: Document
  ) {}

  focus() {
    this.setInputValue(null);
  }

  blur() {
    const value = this._formatValue(
      Number(this.inputElement.value || this._value)
    );
    this.setInputValue(value);
    this.setInputPlaceholder(value);
    this.timeChanged.emit(value);
  }

  setInputValue(value: number | null) {
    if (value !== null) {
      this.inputElement.value = this._withZeroPrefix(value);
    } else {
      this.inputElement.value = '';
    }

    this.cdr.markForCheck();
  }

  setInputPlaceholder(value: number) {
    this.inputElement.placeholder = this._withZeroPrefix(value);
    this.cdr.markForCheck();
  }

  _withZeroPrefix(value: number): string {
    const newValue = this.isMeridiem && value === 0 ? 12 : value;

    return newValue < 10 ? `0${newValue}` : `${newValue}`;
  }

  private _formatValue(value: number): number {
    if (this.isMeridiem && (value === 0 || value === 24)) {
      return 12;
    }

    if (this.isMeridiem && value > 12 && value < 24) {
      return value - 12;
    }

    if (!this.isMeridiem && value === 24) {
      return 0;
    }

    return Math.min(Math.max(value, this._min), this._max);
  }
}

@Component({
  selector: 'mat-time-inputs',
  templateUrl: './time-inputs.html',
  styleUrls: ['./time-inputs.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'mat-time-inputs',
  },
})
export class MatTimeInputs<T> {
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

  selectedHour: number = 0;
  selectedMinute: number = 0;
  period: MatTimePeriodType;

  constructor(@Optional() private _timeAdapter: TimeAdapter<T>) {}

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
}
