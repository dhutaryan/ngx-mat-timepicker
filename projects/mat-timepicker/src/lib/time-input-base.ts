import {
  ChangeDetectorRef,
  Directive,
  DOCUMENT,
  effect,
  ElementRef,
  HostListener,
  inject,
  InjectionToken,
  input,
  linkedSignal,
  output,
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
  readonly value = input.required<number>();

  readonly timeChanged = output<number>();

  protected readonly placeholder = linkedSignal(() =>
    this._withZeroPrefix(this.value()),
  );

  constructor() {
    effect(() => {
      const value = this.value();
      if (!this.hasFocus) {
        this.setInputValue(value);
      }
    });
  }

  @HostListener('keydown', ['$event']) _keydown(event: KeyboardEvent) {
    this._keydownHandler(event);
  }

  private readonly _keydownHandler = inject(
    MAT_TIMEPICKER_INPUTS_KEYDOWN_HANDLER,
  );
  private readonly element = inject<ElementRef<HTMLInputElement>>(ElementRef);
  private readonly _cdr = inject(ChangeDetectorRef);
  private readonly _document = inject(DOCUMENT);

  get inputElement() {
    return this.element.nativeElement;
  }

  get hasFocus() {
    return this.element.nativeElement === this._document.activeElement;
  }

  focus() {
    this.setInputValue(null);
  }

  blur() {
    const isNumber = !isNaN(Number(this.inputElement.value));
    const value = this.value();
    const newValue = this._formatValue(
      isNumber ? Number(this.inputElement.value || value) : value,
    );
    this.setInputValue(newValue);
    this.timeChanged.emit(newValue);
  }

  setInputValue(value: number | null) {
    if (value !== null) {
      this.inputElement.value = this._withZeroPrefix(value);
    } else {
      this.inputElement.value = '';
    }

    this._cdr.markForCheck();
  }

  abstract _withZeroPrefix(value: number): string;

  abstract _formatValue(value: number): number;
}
