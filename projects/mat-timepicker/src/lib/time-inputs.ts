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
import { MatTimeFaceBase } from './time-face-base';
import { MatTimepickerIntl } from './timepicker-intl';

export function withZeroPrefix(value: number, isMeridiem: boolean): string {
  const newValue = isMeridiem && value === 0 ? 12 : value;

  return newValue < 10 ? `0${newValue}` : `${newValue}`;
}

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
    private _cdr: ChangeDetectorRef,
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

    this._cdr.markForCheck();
  }

  setInputPlaceholder(value: number) {
    this.inputElement.placeholder = this._withZeroPrefix(value);
    this._cdr.markForCheck();
  }

  _withZeroPrefix(value: number): string {
    return withZeroPrefix(value, this.isMeridiem);
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
export class MatTimeInputs<T> extends MatTimeFaceBase<T> {
  constructor(
    public _intl: MatTimepickerIntl,
    @Optional() _timeAdapter: TimeAdapter<T>
  ) {
    super(_timeAdapter);
  }
}
