import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  ElementRef,
  inject,
  input,
  NgZone,
  Optional,
  ViewEncapsulation,
} from '@angular/core';
import { coerceNumberProperty, NumberInput } from '@angular/cdk/coercion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { take } from 'rxjs';

import { TimeAdapter } from './adapter';
import { MatTimeFaceBase } from './time-face-base';
import { MatTimepickerIntl } from './timepicker-intl';
import {
  MatTimeInputBase,
  withZeroPrefix,
  withZeroPrefixMeridiem,
} from './time-input-base';
import { MatTimePeriod } from './time-period';
import { MatTimepickerContentLayout } from './timepicker-content-layout';

@Directive({
  selector: 'input[matHourInput]',
  standalone: true,
  exportAs: 'matTimeInput',
  host: {
    class: 'mat-time-input',
    '(focus)': 'focus()',
    '(blur)': 'blur()',
  },
})
export class MatHourInput extends MatTimeInputBase {
  readonly availableHours = input<number[]>([]);

  readonly isMeridiem = input<boolean>(false);

  _withZeroPrefix(value: number): string {
    return withZeroPrefixMeridiem(value, this.isMeridiem());
  }

  _formatValue(hour: number): number {
    const getValue = () => {
      if (this.isMeridiem()) {
        if (hour === 0 || hour === 24) {
          return 12;
        }
      }

      if (hour === 24) {
        return 0;
      }

      return this.isMeridiem() && hour > 12 ? hour - 12 : hour;
    };

    const value = getValue();
    const availableHours = this.availableHours();

    if (this.isMeridiem()) {
      if (!availableHours.length) {
        return this.value;
      }

      if (value === 12 && availableHours.includes(12)) {
        return 12;
      }

      if (value === 12 && !availableHours.includes(12)) {
        return Math.min(...availableHours);
      }

      if (value >= 1 && value < 12) {
        // the last item is max becuase 12 at the beginning is kinda "min"
        const maxHour = availableHours[availableHours.length - 1];

        return Math.min(Math.max(value, Math.min(...availableHours)), maxHour);
      }
    }

    return Math.min(
      Math.max(value, Math.min(...availableHours)),
      Math.max(...availableHours),
    );
  }
}

@Directive({
  selector: 'input[matMinuteInput]',
  standalone: true,
  exportAs: 'matTimeInput',
  host: {
    class: 'mat-time-input',
    '(focus)': 'focus()',
    '(blur)': 'blur()',
  },
})
export class MatMinuteInput extends MatTimeInputBase {
  /** Step over minutes. */
  readonly interval = input(1, {
    transform: (value: NumberInput) => coerceNumberProperty(value) || 1,
  });

  readonly availableMinutes = input<number[]>([]);

  _withZeroPrefix(value: number): string {
    return withZeroPrefix(value);
  }

  _formatValue(value: number): number {
    const availableMinutes = this.availableMinutes();
    if (!availableMinutes.length) {
      return this.value;
    }

    const roundedValue = Math.round(value / this.interval()) * this.interval();

    return Math.min(
      Math.max(roundedValue, Math.min(...availableMinutes)),
      Math.max(...availableMinutes),
    );
  }
}

@Component({
  selector: 'mat-time-inputs',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTimepickerContentLayout,
    MatHourInput,
    MatMinuteInput,
    MatTimePeriod,
  ],
  templateUrl: './time-inputs.html',
  styleUrls: ['./time-inputs.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'mat-time-inputs',
  },
})
export class MatTimeInputs<T> extends MatTimeFaceBase<T> {
  public readonly _intl = inject(MatTimepickerIntl);
  private readonly _ngZone = inject(NgZone);
  private readonly _elementRef = inject(ElementRef);

  constructor(@Optional() _timeAdapter: TimeAdapter<T>) {
    super(_timeAdapter);
  }

  /**
   * Using for skipping that focus shouldn't be moved to the active cell on the next tick.
   * We need to use it to avoid focusing input for input mode.
   */
  private _skipNextTickFocus = false;

  focusActiveCell(): void {
    this._ngZone.runOutsideAngular(() => {
      this._ngZone.onStable.pipe(take(1)).subscribe(() => {
        const activeCell: HTMLElement | null =
          this._elementRef.nativeElement.querySelector(
            '.mat-timepicker-content input', // to avoid focus for inline mode
          );
        if (activeCell && !this._skipNextTickFocus) {
          activeCell.focus();
          this._skipNextTickFocus = true;
        }
      });
    });
  }
}
