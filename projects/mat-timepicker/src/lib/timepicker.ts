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
  host: {
    class: 'mat-timepicker',
    '[class.mat-primary]': 'color !== "accent" && color !== "warn"',
    '[class.mat-accent]': 'color === "accent"',
    '[class.mat-warn]': 'color === "warn"',
  },
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
