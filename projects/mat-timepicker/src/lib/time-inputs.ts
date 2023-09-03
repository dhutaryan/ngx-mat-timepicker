import { DOCUMENT } from '@angular/common';
import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  Optional,
  Directive,
  Input,
  ElementRef,
  ChangeDetectorRef,
  Inject,
  NgZone,
} from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { take } from 'rxjs';

import { TimeAdapter } from './adapter';
import { MatTimeFaceBase } from './time-face-base';
import { MatTimepickerIntl } from './timepicker-intl';
import {
  MatTimeInputBase,
  withZeroPrefix,
  withZeroPrefixMeridiem,
} from './time-input-base';

@Directive({
  selector: 'input[matHourInput]',
  exportAs: 'matTimeInput',
  host: {
    class: 'mat-time-input',
    '(focus)': 'focus($event)',
    '(blur)': 'blur($event)',
  },
})
export class MatHourInput extends MatTimeInputBase {
  @Input()
  get availableHours(): number[] {
    return this._availableHours;
  }
  set availableHours(value: number[]) {
    this._availableHours = value;
    console.log(this.availableHours);
  }
  private _availableHours: number[] = [];

  @Input() isMeridiem: boolean;

  constructor(
    element: ElementRef<HTMLInputElement>,
    _cdr: ChangeDetectorRef,
    @Inject(DOCUMENT) _document: Document
  ) {
    super(element, _cdr, _document);
  }

  _withZeroPrefix(value: number): string {
    return withZeroPrefixMeridiem(value, this.isMeridiem);
  }

  _formatValue(hour: number): number {
    const getValue = () => {
      if (this.isMeridiem) {
        if (hour === 0 || hour === 24) {
          return 12;
        }
      }

      if (hour === 24) {
        return 0;
      }

      return this.isMeridiem && hour > 12 ? hour - 12 : hour;
    };

    const value = getValue();

    if (this.isMeridiem) {
      if (!this.availableHours.length) {
        return this.value;
      }

      if (value === 12 && this.availableHours.includes(12)) {
        return 12;
      }

      if (value === 12 && !this.availableHours.includes(12)) {
        return Math.min(...this.availableHours);
      }

      if (value >= 1 && value < 12) {
        // the last item is max becuase 12 at the beginning is kinda "min"
        const maxHour = this.availableHours[this.availableHours.length - 1];

        return Math.min(
          Math.max(value, Math.min(...this.availableHours)),
          maxHour
        );
      }
    }

    return Math.min(
      Math.max(value, Math.min(...this.availableHours)),
      Math.max(...this.availableHours)
    );
  }
}

@Directive({
  selector: 'input[matMinuteInput]',
  exportAs: 'matTimeInput',
  host: {
    class: 'mat-time-input',
    '(focus)': 'focus($event)',
    '(blur)': 'blur($event)',
  },
})
export class MatMinuteInput extends MatTimeInputBase {
  /** Step over minutes. */
  @Input()
  get interval(): number {
    return this._interval;
  }
  set interval(value: number) {
    this._interval = coerceNumberProperty(value) || 1;
  }
  private _interval: number = 1;

  @Input()
  get availableMinutes(): number[] {
    return this._availableMinutes;
  }
  set availableMinutes(value: number[]) {
    this._availableMinutes = value;
  }
  private _availableMinutes: number[] = [];

  constructor(
    element: ElementRef<HTMLInputElement>,
    _cdr: ChangeDetectorRef,
    @Inject(DOCUMENT) _document: Document
  ) {
    super(element, _cdr, _document);
  }

  _withZeroPrefix(value: number): string {
    return withZeroPrefix(value);
  }

  _formatValue(value: number): number {
    if (!this.availableMinutes.length) {
      return this.value;
    }

    const roundedValue = Math.round(value / this.interval) * this.interval;

    return Math.min(
      Math.max(roundedValue, Math.min(...this.availableMinutes)),
      Math.max(...this.availableMinutes)
    );
  }
}

@Component({
  selector: 'mat-time-inputs',
  templateUrl: './time-inputs.html',
  styleUrls: ['./time-inputs.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'mat-time-inputs',
  },
})
export class MatTimeInputs<T> extends MatTimeFaceBase<T> {
  constructor(
    public _intl: MatTimepickerIntl,
    @Optional() _timeAdapter: TimeAdapter<T>,
    private _ngZone: NgZone,
    private _elementRef: ElementRef
  ) {
    super(_timeAdapter);
  }

  isMinHour12: boolean;

  focusActiveCell(): void {
    this._ngZone.runOutsideAngular(() => {
      this._ngZone.onStable.pipe(take(1)).subscribe(() => {
        setTimeout(() => {
          const activeCell: HTMLElement | null =
            this._elementRef.nativeElement.querySelector('input');

          if (activeCell) {
            activeCell.focus();
          }
        });
      });
    });
  }
}
