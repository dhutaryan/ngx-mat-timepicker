import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MatTimepickerIntl {
  /**
   * Stream that emits whenever the labels here are changed. Use this to notify
   * components if the labels have changed after initialization.
   */
  readonly changes: Subject<void> = new Subject<void>();

  /** A label for inputs title. */
  inputsTitle = 'Enter time';

  /** A label for dials title. */
  dialsTitle = 'Select time';

  /** A label for hour input hint. */
  hourInputHint = 'Hour';

  /** A label for minute input hint. */
  minuteInputHint = 'Minute';

  /** Label for the button used to open the timepicker popup (used by screen readers). */
  openTimepickerLabel = 'Open timepicker';

  /** Label for the button used to close the timepicker popup (used by screen readers). */
  closeTimepickerLabel = 'Close timepicker';

  /** A label for OK button to apply time. */
  okButton = 'OK';

  /** A label for cancel button to close timepicker. */
  cancelButton = 'Cancel';

  /** A label for am text. */
  am = 'AM';

  /** A label for am text. */
  pm = 'PM';
}
