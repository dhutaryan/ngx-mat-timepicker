import { Directive, ElementRef, Inject, Input, Optional } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatFormField, MAT_FORM_FIELD } from '@angular/material/form-field';

import { MatTimepicker } from './timepicker';

/** Directive used to connect an input to a MatTimepicker. */
@Directive({
  selector: 'input[matTimepicker]',
})
export class MatTimepickerInput {
  /** The timepicker that this input is associated with. */
  @Input()
  set matTimepicker(timepicker: MatTimepicker) {
    if (timepicker) {
      this._timepicker = timepicker;
      timepicker.registerInput(this);
    }
  }
  private _timepicker: MatTimepicker;

  constructor(
    private _elementRef: ElementRef<HTMLInputElement>,
    @Optional() @Inject(MAT_FORM_FIELD) private _formField?: MatFormField
  ) {}

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
}
