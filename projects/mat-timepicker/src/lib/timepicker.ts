import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

import { MatTimepickerBase } from './timepicker-base';

@Component({
  selector: 'mat-timepicker',
  template: '',
  exportAs: 'matTimepicker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [{ provide: MatTimepickerBase, useExisting: MatTimepicker }],
})
export class MatTimepicker extends MatTimepickerBase {}
