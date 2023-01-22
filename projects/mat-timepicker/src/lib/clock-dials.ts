import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  OnInit,
  OnDestroy,
  Input,
} from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

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
export class MatClockDials implements OnInit, OnDestroy {
  /** Whether the clock uses 12 hour format. */
  @Input() isMeridiem: boolean;

  isHoursView = true;
  selectedHour = 0;
  selectedMinute = 0;

  /** Specifies the view of clock dial. */
  private readonly _view = new BehaviorSubject<MatDialView>('hours');
  private _viewSubscription: Subscription | null = Subscription.EMPTY;

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

  /** Handles hour selection. */
  _onHourSelected(hour: number): void {
    this._view.next('minutes');
    this.selectedHour = hour;
  }

  /** Handles minute selection. */
  _onMinuteSelected(minute: number): void {
    this.selectedMinute = minute;
  }
}
