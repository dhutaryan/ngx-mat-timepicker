import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter,
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
export class MatTimePeriod {
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

  @Input()
  get disabledPeriod(): MatTimePeriodType | null {
    return this._disabledPeriod;
  }
  set disabledPeriod(value: MatTimePeriodType | null) {
    this._disabledPeriod = value;
  }
  private _disabledPeriod: MatTimePeriodType | null = null;

  @Output() periodChanged = new EventEmitter<MatTimePeriodType>();

  setPeriod(event: Event, period: MatTimePeriodType): void {
    event.preventDefault();
    this.period = period;
    this.periodChanged.emit(period);
  }

  _isPeriodDisabled(period: MatTimePeriodType): boolean {
    if (!this.disabledPeriod) {
      return false;
    }

    return this.disabledPeriod === period;
  }
}
