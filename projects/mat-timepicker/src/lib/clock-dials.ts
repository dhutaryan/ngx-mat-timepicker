import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  OnInit,
  OnDestroy,
  Optional,
  NgZone,
  ElementRef,
  Input,
} from '@angular/core';
import { BehaviorSubject, Subscription, take } from 'rxjs';

import { TimeAdapter } from './adapter';
import { MatTimeFaceBase } from './time-face-base';
import { withZeroPrefixMeridiem } from './time-input-base';
import { MatTimepickerIntl } from './timepicker-intl';
import { TimepickerOrientation } from './orientation';

export type MatDialView = 'hours' | 'minutes';

@Component({
  selector: 'mat-clock-dials',
  templateUrl: './clock-dials.html',
  styleUrls: ['./clock-dials.scss'],
  exportAs: 'matClockDials',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    role: 'dial',
    class: 'mat-clock-dials',
  },
})
export class MatClockDials<T>
  extends MatTimeFaceBase<T>
  implements OnInit, OnDestroy
{
  /** Layout orientation. */
  @Input() orientation: TimepickerOrientation;

  isHoursView = true;

  /** Specifies the view of clock dial. */
  private readonly _view = new BehaviorSubject<MatDialView>('hours');
  private _viewSubscription: Subscription | null = Subscription.EMPTY;

  constructor(
    public _intl: MatTimepickerIntl,
    @Optional() _timeAdapter: TimeAdapter<T>,
    private _ngZone: NgZone,
    private _elementRef: ElementRef
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

  focusActiveCell(): void {
    this._ngZone.runOutsideAngular(() => {
      this._ngZone.onStable.pipe(take(1)).subscribe(() => {
        setTimeout(() => {
          const activeCell: HTMLElement | null =
            this._elementRef.nativeElement.querySelector(
              '.mat-clock-dial-cell-active'
            );

          if (activeCell) {
            activeCell.focus();
            return;
          }

          const activePoint: HTMLElement | null =
            this._elementRef.nativeElement.querySelector(
              '.mat-clock-dial-hand-point'
            );

          if (activePoint) {
            // if no active cell we need to focus a small dot
            activePoint.focus();
          }
        });
      });
    });
  }

  _withZeroPrefix(value: number): string {
    if (value === 0) {
      return '00';
    }

    return withZeroPrefixMeridiem(value, this.isMeridiem);
  }

  /** Handles hour selection. */
  _onHourChanged({
    hour,
    changeView = false,
  }: {
    hour: number;
    changeView?: boolean;
  }): void {
    if (changeView) {
      this._view.next('minutes');
    }
    this._onHourSelected(hour);
  }
}
