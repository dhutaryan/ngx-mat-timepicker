import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'mat-timepicker-content-layout',
  templateUrl: './timepicker-content-layout.html',
  styleUrls: ['./timepicker-content-layout.scss'],
  exportAs: 'matTimepickerContent',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'mat-timepicker-content-layout',
  },
})
export class MatTimepickerContentLayout {
  /** Content title. */
  @Input() title: string;
}
