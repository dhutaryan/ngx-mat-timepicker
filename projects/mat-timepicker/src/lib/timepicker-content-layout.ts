import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  ViewEncapsulation,
} from '@angular/core';

import { TimepickerOrientation } from './orientation';

@Component({
  selector: 'mat-timepicker-content-layout',
  standalone: true,
  templateUrl: './timepicker-content-layout.html',
  styleUrls: ['./timepicker-content-layout.scss'],
  exportAs: 'matTimepickerContent',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'mat-timepicker-content-layout',
    '[class.mat-timepicker-content-layout-horizontal]': 'horizontal()',
    '[class.mat-timepicker-content-layout-vertical]': 'vertical()',
  },
})
export class MatTimepickerContentLayout {
  protected readonly horizontal = computed(
    () => this.orientation() === 'horizontal',
  );
  protected readonly vertical = computed(
    () => this.orientation() === 'vertical',
  );

  /** Content title. */
  readonly title = input.required<string>();

  /** Layout orientation. */
  readonly orientation = input<TimepickerOrientation>('vertical');
}
