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
} from '@angular/core';

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
  @Input() isMeridiem: boolean;
  @Input() include12Hour: boolean;
  @Input() exclude12Hour: boolean;

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
      if (this.min > 12 || (this.max < 1 && !this.include12Hour)) {
        return this.value;
      }

      if (value === 12 && this.include12Hour) {
        return 12;
      }

      if (value === 12 && this.exclude12Hour) {
        return this.min;
      }

      if (value >= 1 && value < 12) {
        return Math.min(Math.max(value, this.min), this.max);
      }
    }

    return Math.min(Math.max(value, this.min), this.max);
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
    if (this.min > 59 || this.max < 0) {
      return this.value;
    }

    return Math.min(Math.max(value, this.min), this.max);
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
    @Optional() _timeAdapter: TimeAdapter<T>
  ) {
    super(_timeAdapter);
  }

  isMinHour12: boolean;

  _getMinHour() {
    if (!isNaN(Number(this.minHour))) {
      this.isMinHour12 = this.minHour === 0;
      return this.minHour;
    }
    return this.isMeridiem ? 1 : 0;
  }

  _getMaxHour() {
    if (!isNaN(Number(this.maxHour))) {
      return this.maxHour;
    }
    return this.isMeridiem ? 12 : 23;
  }
}
