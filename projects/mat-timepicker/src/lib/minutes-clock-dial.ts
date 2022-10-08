import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'mat-minutes-clock-dial',
  templateUrl: 'minutes-clock-dial.html',
  exportAs: 'matMinutesClockDial',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'mat-minutes-clock-dial',
  },
})
export class MatMinutesClockDial {}
