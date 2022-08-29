import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  Input,
} from '@angular/core';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

export type MatTimePeriodType = 'am' | 'pm';

@Component({
  selector: 'mat-time-period',
  templateUrl: './time-period.html',
  styleUrls: ['./time-period.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'mat-time-period',
    '[class.mat-time-period-vertical]': 'vertical',
    '[class.mat-time-period-horizontal]': '!vertical',
    '[attr.aria-orientation]': 'vertical ? "vertical" : "horizontal"',
  },
})
export class MatTimePeriod implements OnInit {
  /** Whether the time period is vertically aligned. */
  @Input()
  get vertical(): boolean {
    return this._vertical;
  }
  set vertical(value: BooleanInput) {
    this._vertical = coerceBooleanProperty(value);
  }
  private _vertical: boolean = true;

  @Input()
  get period(): MatTimePeriodType {
    return this._period;
  }
  set period(value: MatTimePeriodType) {
    this._period = value || 'am';
  }
  private _period: MatTimePeriodType = 'am';

  constructor() {}

  ngOnInit(): void {}

  setPeriod(period: MatTimePeriodType): void {
    this.period = period;
  }
}
