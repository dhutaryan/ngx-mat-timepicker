import {
  Directive,
  ElementRef,
  forwardRef,
  Inject,
  Input,
  Optional,
} from '@angular/core';
import {
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatFormField, MAT_FORM_FIELD } from '@angular/material/form-field';
import { MAT_INPUT_VALUE_ACCESSOR } from '@angular/material/input';

import { MatTimepicker } from './timepicker';
import { TimeAdapter } from './adapter/time-adapter';
import { MatTimepickerInputBase } from './timepicker-input-base';
import { TimeSelectionModelChange } from './time-selection-model';
import { MatTimepickerControl, MatTimepickerPanel } from './timepicker-base';

export const MAT_TIMEPICKER_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatTimepickerInput),
  multi: true,
};

export const MAT_TIMEPICKER_VALIDATORS: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MatTimepickerInput),
  multi: true,
};

/** Directive used to connect an input to a MatTimepicker. */
@Directive({
  selector: 'input[matTimepicker]',
  exportAs: 'matTimepickerInput',
  providers: [
    MAT_TIMEPICKER_VALUE_ACCESSOR,
    MAT_TIMEPICKER_VALIDATORS,
    { provide: MAT_INPUT_VALUE_ACCESSOR, useExisting: MatTimepickerInput },
  ],
  host: {
    class: 'mat-timepicker-input',
    '[disabled]': 'disabled',
    '(input)': '_onInput($event.target.value)',
    '(change)': '_onChange()',
    '(blur)': '_onBlur()',
  },
})
export class MatTimepickerInput<T>
  extends MatTimepickerInputBase<T | null, T>
  implements MatTimepickerControl<T | null>
{
  /** The timepicker that this input is associated with. */
  @Input()
  set matTimepicker(
    timepicker: MatTimepickerPanel<MatTimepickerControl<T>, T | null, T>
  ) {
    if (timepicker) {
      this._timepicker = timepicker;
      this._registerModel(timepicker.registerInput(this));
    }
  }
  private _timepicker: MatTimepickerPanel<MatTimepickerControl<T>, T | null, T>;

  /** The combined form control validator for this input. */
  protected _validator: ValidatorFn | null;

  /** The minimum valid date. */
  @Input()
  get min(): T | null {
    return this._min;
  }
  set min(value: T | null) {
    const validValue = this._timeAdapter.getValidTimeOrNull(
      this._timeAdapter.deserialize(value)
    );

    if (!this._timeAdapter.sameTime(validValue, this._min)) {
      this._min = validValue;
      this._validatorOnChange();
    }
  }
  private _min: T | null;

  /** The maximum valid date. */
  @Input()
  get max(): T | null {
    return this._max;
  }
  set max(value: T | null) {
    const validValue = this._timeAdapter.getValidTimeOrNull(
      this._timeAdapter.deserialize(value)
    );

    if (!this._timeAdapter.sameTime(validValue, this._max)) {
      this._max = validValue;
      this._validatorOnChange();
    }
  }
  private _max: T | null;

  constructor(
    elementRef: ElementRef<HTMLInputElement>,
    @Optional() timeAdapter: TimeAdapter<T>,
    @Optional() @Inject(MAT_FORM_FIELD) private _formField?: MatFormField
  ) {
    super(elementRef, timeAdapter);
    this._validator = Validators.compose(super._getValidators());
  }

  /**
   * Gets the element that the timepicker popup should be connected to.
   * @return The element to connect the popup to.
   */
  getConnectedOverlayOrigin(): ElementRef {
    return this._formField
      ? this._formField.getConnectedOverlayOrigin()
      : this._elementRef;
  }

  /** Returns the palette used by the input's form field, if any. */
  getThemePalette(): ThemePalette {
    return this._formField ? this._formField.color : undefined;
  }

  /** Gets the input's minimum time. */
  _getMinTime() {
    return this._min;
  }

  /** Gets the input's maximum time. */
  _getMaxTime() {
    return this._max;
  }

  protected _assignValueToModel(value: T | null): void {
    if (this._model) {
      this._model.updateSelection(value, this);
    }
  }

  protected _getValueFromModel(modelValue: T | null): T | null {
    return modelValue;
  }

  protected _shouldHandleChangeEvent(event: TimeSelectionModelChange<T>) {
    return event.source !== this;
  }
}
