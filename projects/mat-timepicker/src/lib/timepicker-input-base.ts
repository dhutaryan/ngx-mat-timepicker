import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  Optional,
  Output,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';
import { Subscription } from 'rxjs';

import { TimeAdapter } from './adapter';
import {
  ExtractTimeTypeFromSelection,
  MatTimeSelectionModel,
  TimeSelectionModelChange,
} from './time-selection-model';

/**
 * An event used for timepicker input and change events. We don't always have access to a native
 * input or change event because the event may have been triggered by the user clicking on the
 * clock popup. For consistency, we always use MatTimepickerInputEvent instead.
 */
export class MatTimepickerInputEvent<D, S = unknown> {
  /** The new value for the target timepicker input. */
  value: D | null;

  constructor(
    /** Reference to the timepicker input component that emitted the event. */
    public target: MatTimepickerInputBase<S, D>,
    /** Reference to the native input element associated with the timepicker input. */
    public targetElement: HTMLElement
  ) {
    this.value = this.target.value;
  }
}

const TIME_FORMATS = { hour: '2-digit', minute: '2-digit' };

@Directive()
export abstract class MatTimepickerInputBase<
  S,
  T = ExtractTimeTypeFromSelection<S>
> implements ControlValueAccessor, Validator
{
  /** The value of the input. */
  @Input()
  get value(): T | null {
    return this._model
      ? this._getValueFromModel(this._model.selection)
      : this._pendingValue;
  }
  set value(value: any) {
    this._assignValueProgrammatically(value);
  }
  protected _model: MatTimeSelectionModel<S, T> | undefined;

  /** Whether the timepicker-input is disabled. */
  @Input()
  get disabled(): boolean {
    return !!this._disabled;
  }
  set disabled(value: BooleanInput) {
    const newValue = coerceBooleanProperty(value);
    const element = this._elementRef.nativeElement;

    if (this._disabled !== newValue) {
      this._disabled = newValue;
      // this.stateChanges.next(undefined);
    }

    // We need to null check the `blur` method, because it's undefined during SSR.
    // In Ivy static bindings are invoked earlier, before the element is attached to the DOM.
    // This can cause an error to be thrown in some browsers (IE/Edge) which assert that the
    // element has been inserted.
    if (newValue && this._isInitialized && element.blur) {
      // Normally, native input elements automatically blur if they turn disabled. This behavior
      // is problematic, because it would mean that it triggers another change detection cycle,
      // which then causes a changed after checked error if the input element was focused before.
      element.blur();
    }
  }
  private _disabled: boolean;

  /** Emits when a change event is fired on this <input>. */
  @Output() readonly timeChange: EventEmitter<MatTimepickerInputEvent<T, S>> =
    new EventEmitter<MatTimepickerInputEvent<T, S>>();

  /** Emits when an input event is fired on this <input>. */
  @Output() readonly timeInput: EventEmitter<MatTimepickerInputEvent<T, S>> =
    new EventEmitter<MatTimepickerInputEvent<T, S>>();

  /** Combined form control validator for this input. */
  protected abstract _validator: ValidatorFn | null;

  /** Whether the component has been initialized. */
  private _isInitialized: boolean;

  /**
   * Since the value is kept on the model which is assigned in an Input,
   * we might get a value before we have a model. This property keeps track
   * of the value until we have somewhere to assign it.
   */
  private _pendingValue: T | null;

  _onTouched = () => {};
  _validatorOnChange = () => {};

  private _cvaOnChange: (value: any) => void = () => {};
  private _valueChangesSubscription = Subscription.EMPTY;

  constructor(
    protected _elementRef: ElementRef<HTMLInputElement>,
    @Optional() public _timeAdapter: TimeAdapter<T>
  ) {}

  /** Registers a time selection model with the input. */
  _registerModel(model: MatTimeSelectionModel<S, T>): void {
    this._model = model;
    this._valueChangesSubscription.unsubscribe();

    if (this._pendingValue) {
      this._assignValue(this._pendingValue);
    }

    this._valueChangesSubscription = this._model.selectionChanged.subscribe(
      (event) => {
        if (this._shouldHandleChangeEvent(event)) {
          const value = this._getValueFromModel(event.selection);
          this._lastValueValid = this._isValidValue(value);
          this._cvaOnChange(value);
          this._onTouched();
          this._formatValue(value);
          this.timeInput.emit(
            new MatTimepickerInputEvent(this, this._elementRef.nativeElement)
          );
          this.timeChange.emit(
            new MatTimepickerInputEvent(this, this._elementRef.nativeElement)
          );
        }
      }
    );
  }

  _onInput(value: string) {
    const lastValueWasValid = this._lastValueValid;
    let time = this._timeAdapter.parse(value, TIME_FORMATS);
    this._lastValueValid = this._isValidValue(time);
    time = this._timeAdapter.getValidTimeOrNull(time);
    const hasChanged = !this._timeAdapter.sameTime(time, this.value);

    // We need to fire the CVA change event for all
    // nulls, otherwise the validators won't run.
    if (!time || hasChanged) {
      this._cvaOnChange(time);
    } else {
      // Call the CVA change handler for invalid values
      // since this is what marks the control as dirty.
      if (value && !this.value) {
        this._cvaOnChange(time);
      }

      if (lastValueWasValid !== this._lastValueValid) {
        this._validatorOnChange();
      }
    }

    if (hasChanged) {
      this._assignValue(time);
      this.timeInput.emit(
        new MatTimepickerInputEvent(this, this._elementRef.nativeElement)
      );
    }
  }

  /** Handles change event on the input. */
  _onChange() {
    this.timeChange.emit(
      new MatTimepickerInputEvent(this, this._elementRef.nativeElement)
    );
  }

  /** Handles blur event on the input. */
  _onBlur() {
    // Reformat the input only if we have a valid value.
    if (this.value) {
      this._formatValue(this.value);
    }

    this._onTouched();
  }

  /** Implemented as part of ControlValueAccessor.  */
  writeValue(value: T | null): void {
    this.value = value;
  }

  /** Implemented as part of ControlValueAccessor.  */
  registerOnChange(fn: any): void {
    this._cvaOnChange = fn;
  }

  /** Implemented as part of ControlValueAccessor.  */
  registerOnTouched(fn: () => void): void {
    this._onTouched = fn;
  }

  /** Implemented as part of ControlValueAccessor.  */
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  registerOnValidatorChange(fn: () => void): void {
    this._validatorOnChange = fn;
  }

  validate(c: AbstractControl): ValidationErrors | null {
    return this._validator ? this._validator(c) : null;
  }

  /** Whether the last value set on the input was valid. */
  protected _lastValueValid = false;

  /** Assigns a value to the input's model. */
  protected abstract _assignValueToModel(model: T | null): void;

  /** Converts a value from the model into a native value for the input. */
  protected abstract _getValueFromModel(modelValue: S): T | null;

  /** Predicate that determines whether the input should handle a particular change event. */
  protected abstract _shouldHandleChangeEvent(
    event: TimeSelectionModelChange<S>
  ): boolean;

  /** Programmatically assigns a value to the input. */
  protected _assignValueProgrammatically(value: T | null) {
    value = this._timeAdapter.deserialize(value);
    this._lastValueValid = this._isValidValue(value);
    value = this._timeAdapter.getValidTimeOrNull(value);
    this._assignValue(value);
    this._formatValue(value);
  }

  /** Formats a value and sets it on the input element. */
  protected _formatValue(value: T | null) {
    this._elementRef.nativeElement.value =
      value != null ? this._timeAdapter.format(value, TIME_FORMATS) : '';
  }

  /** Gets the base validator functions. */
  protected _getValidators(): ValidatorFn[] {
    return [this._parseValidator];
  }

  /** Whether a value is considered valid. */
  private _isValidValue(value: T | null): boolean {
    return !value || this._timeAdapter.isValid(value);
  }

  /** Assigns a value to the model. */
  private _assignValue(value: T | null) {
    // We may get some incoming values before the model was
    // assigned. Save the value so that we can assign it later.
    if (this._model) {
      this._assignValueToModel(value);
      this._pendingValue = null;
    } else {
      this._pendingValue = value;
    }
  }

  /** The form control validator for whether the input parses. */
  private _parseValidator: ValidatorFn = (): ValidationErrors | null => {
    return this._lastValueValid
      ? null
      : { matTimepickerParse: { text: this._elementRef.nativeElement.value } };
  };
}
