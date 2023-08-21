import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

import { TimepickerOrientation } from './orientation';

@Component({
  selector: 'mat-timepicker-content-layout',
  templateUrl: './timepicker-content-layout.html',
  styleUrls: ['./timepicker-content-layout.scss'],
  exportAs: 'matTimepickerContent',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'mat-timepicker-content-layout',
    '[class.mat-timepicker-content-layout-horizontal]':
      'orientation === "horizontal"',
    '[class.mat-timepicker-content-layout-vertical]':
      'orientation === "vertical"',
  },
})
export class MatTimepickerContentLayout {
  /** Content title. */
  @Input() title: string;

  /** Layout orientation. */
  @Input() orientation: TimepickerOrientation = 'vertical';
}
