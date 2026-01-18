import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter,
  input,
  booleanAttribute,
  output,
  linkedSignal,
} from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatRippleModule } from '@angular/material/core';

import { MatTimepickerIntl } from './timepicker-intl';

export type MatTimePeriodType = 'am' | 'pm';

@Component({
  selector: 'mat-time-period',
  standalone: true,
  imports: [MatDividerModule, MatRippleModule],
  templateUrl: './time-period.html',
  styleUrls: ['./time-period.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'mat-time-period',
    '[class.mat-time-period-vertical]': 'vertical()',
    '[class.mat-time-period-horizontal]': '!vertical()',
    '[attr.aria-orientation]': 'vertical() ? "vertical" : "horizontal"',
  },
})
export class MatTimePeriod {
  readonly vertical = input(true, { transform: booleanAttribute });
  readonly period = input<MatTimePeriodType>('am');
  readonly disabledPeriod = input<MatTimePeriodType | null>(null);
  readonly periodChanged = output<MatTimePeriodType>();

  readonly _currentPeriod = linkedSignal(() => this.period());

  constructor(public _intl: MatTimepickerIntl) {}

  setPeriod(event: Event, period: MatTimePeriodType): void {
    event.preventDefault();
    this._currentPeriod.set(period);
    this.periodChanged.emit(period);
  }

  _isPeriodDisabled(period: MatTimePeriodType): boolean {
    if (!this.disabledPeriod()) {
      return false;
    }

    return this.disabledPeriod() === period;
  }
}
