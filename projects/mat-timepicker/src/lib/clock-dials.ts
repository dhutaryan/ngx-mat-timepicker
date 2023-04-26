import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  OnInit,
  OnDestroy,
  Optional,
} from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

import { TimeAdapter } from './adapter';
import { MatTimeFaceBase } from './time-face-base';
import { withZeroPrefix } from './time-inputs';
import { MatTimepickerIntl } from './timepicker-intl';

export type MatDialView = 'hours' | 'minutes';

@Component({
  selector: 'mat-clock-dials',
  templateUrl: './clock-dials.html',
  styleUrls: ['./clock-dials.scss'],
  exportAs: 'matClockDials',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'mat-clock-dials',
  },
})
export class MatClockDials<T>
  extends MatTimeFaceBase<T>
  implements OnInit, OnDestroy
{
  isHoursView = true;

  /** Specifies the view of clock dial. */
  private readonly _view = new BehaviorSubject<MatDialView>('hours');
  private _viewSubscription: Subscription | null = Subscription.EMPTY;

  constructor(
    public _intl: MatTimepickerIntl,
    @Optional() _timeAdapter: TimeAdapter<T>
  ) {
    super(_timeAdapter);
  }

  ngOnInit(): void {
    this._viewSubscription = this._view.subscribe(
      (view) => (this.isHoursView = view === 'hours')
    );
  }

  ngOnDestroy(): void {
    this._viewSubscription?.unsubscribe();
    this._viewSubscription = null;
  }

  /** Changes clock dial view. */
  onViewChange(view: MatDialView): void {
    this._view.next(view);
  }

  _withZeroPrefix(value: number): string {
    return withZeroPrefix(value, this.isMeridiem);
  }

  /** Handles hour selection. */
  _onHourChanged(hour: number): void {
    this._view.next('minutes');
    this._onHourSelected(hour);
  }
}
