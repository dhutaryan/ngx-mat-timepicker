import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

import { MatTimepickerBase, MatTimepickerControl } from './timepicker-base';
import { MAT_SINGLE_TIME_SELECTION_MODEL_PROVIDER } from './time-selection-model';

@Component({
  selector: 'mat-timepicker',
  template: '',
  exportAs: 'matTimepicker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [
    MAT_SINGLE_TIME_SELECTION_MODEL_PROVIDER,
    { provide: MatTimepickerBase, useExisting: MatTimepicker },
  ],
})
export class MatTimepicker<T> extends MatTimepickerBase<
  MatTimepickerControl<T>,
  T | null,
  T
> {}
