import { DOCUMENT } from '@angular/common';
import {
  Input,
  Output,
  EventEmitter,
  Directive,
  ElementRef,
  ChangeDetectorRef,
  Inject,
  Self,
  HostListener,
  InjectionToken,
  inject,
} from '@angular/core';

export function withZeroPrefix(value: number): string {
  return value < 10 ? `0${value}` : `${value}`;
}

export function withZeroPrefixMeridiem(
  value: number,
  isMeridiem: boolean,
): string {
  const newValue = isMeridiem && value === 0 ? 12 : value;

  return withZeroPrefix(newValue);
}

const SPECIAL_KEYS = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'];

export const MAT_TIMEPICKER_INPUTS_KEYDOWN_HANDLER = new InjectionToken<
  (event: KeyboardEvent) => void
>('MatTimepickerInputKeydownHandler', {
  factory: () => (event: KeyboardEvent) => {
    const isDigit = /^[0-9]$/.test(event.key);
    const isSpecial = SPECIAL_KEYS.includes(event.code);

    if (!isDigit && !isSpecial) {
      event.preventDefault();
    }
  },
});

export function provideMatTimepickerInputsKeydownHandler(
  handler: (event: KeyboardEvent) => void,
) {
  return {
    provide: MAT_TIMEPICKER_INPUTS_KEYDOWN_HANDLER,
    useValue: handler,
  };
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
    // we need timeout here to set placeholder first time
    setTimeout(() => {
      this.setInputPlaceholder(this._value);
    }, 0);
  }
  private _value: number;

  @Output() timeChanged = new EventEmitter<number>();

  @HostListener('keydown', ['$event']) _keydown(event: KeyboardEvent) {
    this._keydownHandler(event);
  }

  private readonly _keydownHandler = inject(
    MAT_TIMEPICKER_INPUTS_KEYDOWN_HANDLER,
  );

  get inputElement() {
    return this.element.nativeElement as HTMLInputElement;
  }

  get hasFocus() {
    return this.element?.nativeElement === this._document.activeElement;
  }

  constructor(
    private element: ElementRef<HTMLInputElement>,
    private _cdr: ChangeDetectorRef,
    @Inject(DOCUMENT) private _document: Document,
  ) {}

  focus() {
    this.setInputValue(null);
  }

  blur() {
    const isNumber = !isNaN(Number(this.inputElement.value));
    const value = this._formatValue(
      isNumber ? Number(this.inputElement.value || this._value) : this.value,
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
