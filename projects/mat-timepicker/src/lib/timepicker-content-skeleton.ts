import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'mat-timepicker-content-skeleton',
  templateUrl: './timepicker-content-skeleton.html',
  styleUrls: ['./timepicker-content-skeleton.scss'],
  exportAs: 'matTimepickerContent',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'mat-timepicker-content-skeleton',
  },
})
export class MatTimepickerContentSkeleton {
  /** Content title. */
  @Input() title: string;
}
