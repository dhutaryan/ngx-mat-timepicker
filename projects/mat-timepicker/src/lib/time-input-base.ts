import { DOCUMENT } from '@angular/common';
import {
  Input,
  Output,
  EventEmitter,
  Directive,
  ElementRef,
  ChangeDetectorRef,
  Inject,
} from '@angular/core';

export function withZeroPrefix(value: number): string {
  return value < 10 ? `0${value}` : `${value}`;
}

export function withZeroPrefixMeridiem(
  value: number,
  isMeridiem: boolean
): string {
  const newValue = isMeridiem && value === 0 ? 12 : value;

  return withZeroPrefix(newValue);
}

@Directive()
export abstract class MatTimeInputBase {
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

  abstract _withZeroPrefix(value: number): string;

  abstract _formatValue(value: number): number;
}
