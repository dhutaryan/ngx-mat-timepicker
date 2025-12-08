import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  computed,
  ElementRef,
  inject,
  input,
  NgZone,
  Optional,
  signal,
  ViewEncapsulation,
} from '@angular/core';

import { take } from 'rxjs';

import { TimeAdapter } from './adapter';
import { MatTimeFaceBase } from './time-face-base';
import { withZeroPrefixMeridiem } from './time-input-base';
import { MatTimepickerIntl } from './timepicker-intl';
import { TimepickerOrientation } from './orientation';
import { MatTimepickerContentLayout } from './timepicker-content-layout';
import { MatHoursClockDial } from './hours-clock-dial';
import { MatMinutesClockDial } from './minutes-clock-dial';
import { MatTimePeriod } from './time-period';

export type MatDialView = 'hours' | 'minutes';

@Component({
  selector: 'mat-clock-dials',
  standalone: true,
  imports: [
    MatTimepickerContentLayout,
    MatHoursClockDial,
    MatMinutesClockDial,
    MatTimePeriod,
  ],
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
export class MatClockDials<T> extends MatTimeFaceBase<T> {
  private readonly _ngZone = inject(NgZone);
  private readonly _elementRef = inject(ElementRef);
  private readonly _cdr = inject(ChangeDetectorRef);

  /** Specifies the view of clock dial. */
  private readonly _view = signal<MatDialView>('hours');

  protected readonly _intl = inject(MatTimepickerIntl);

  protected readonly isHoursView = computed(() => this._view() === 'hours');

  protected selectedHourDisplay = computed(() =>
    this._withZeroPrefix(this.selectedHour(), this.isMeridiem()),
  );
  protected selectedMinuteDisplay = computed(() =>
    this._withZeroPrefix(this.selectedMinute(), this.isMeridiem()),
  );

  /** Layout orientation. */
  readonly orientation = input<TimepickerOrientation>('vertical');

  /** Whether the timepicker UI is in touch mode. */
  readonly touchUi = input(false);

  constructor(@Optional() _timeAdapter: TimeAdapter<T>) {
    super(_timeAdapter);
  }

  /** Changes clock dial view. */
  onViewChange(event: Event, view: MatDialView): void {
    event.preventDefault();
    this._view.set(view);
  }

  focusActiveCell(): void {
    this._ngZone.runOutsideAngular(() => {
      this._ngZone.onStable.pipe(take(1)).subscribe(() => {
        const activeCell: HTMLElement | null =
          this._elementRef.nativeElement.querySelector(
            '.mat-timepicker-content .mat-clock-dial-cell-active', // to avoid focus for inline mode
          );

        if (activeCell) {
          activeCell.focus();
          return;
        }

        const activePoint: HTMLElement | null =
          this._elementRef.nativeElement.querySelector(
            '.mat-timepicker-content .mat-clock-dial-hand-point', // to avoid focus for inline mode
          );

        if (activePoint) {
          // if no active cell we need to focus a small dot
          activePoint.focus();
        }
      });
    });
  }

  override _onMinuteSelected(minute: number): void {
    super._onMinuteSelected(minute);
    this._cdr.detectChanges();
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
      this._view.set('minutes');
    }
    this._onHourSelected(hour);
    this._cdr.detectChanges();
  }

  private _withZeroPrefix(value: number, isMeridiem: boolean): string {
    if (value === 0) {
      return '00';
    }

    return withZeroPrefixMeridiem(value, isMeridiem);
  }
}
