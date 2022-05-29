import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'mat-timepicker',
  templateUrl: './timepicker.html',
  styleUrls: ['./timepicker.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatTimepicker implements OnInit {
  /** Whether the timepicker pop-up should be disabled. */
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: BooleanInput) {
    const newValue = coerceBooleanProperty(value);

    if (newValue !== this._disabled) {
      this._disabled = newValue;
    }
  }
  private _disabled: boolean;

  constructor() {}

  ngOnInit(): void {}

  open() {}
}
