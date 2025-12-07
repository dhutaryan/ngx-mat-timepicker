import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  model,
  ViewEncapsulation,
} from '@angular/core';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
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
  protected readonly intl = inject(MatTimepickerIntl);

  protected readonly disabledAM = computed(
    () => this.disabledPeriod() === 'am',
  );

  protected readonly disabledPM = computed(
    () => this.disabledPeriod() === 'pm',
  );

  /** Whether the time period is vertically aligned. */
  readonly vertical = input<BooleanInput, boolean>(true, {
    transform: coerceBooleanProperty,
  });

  readonly period = model<MatTimePeriodType>('am');

  readonly disabledPeriod = input<MatTimePeriodType | null>();

  setPeriod(event: Event, period: MatTimePeriodType): void {
    event.preventDefault();
    this.period.set(period);
  }
}
