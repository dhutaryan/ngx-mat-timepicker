import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewEncapsulation,
} from '@angular/core';

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
export class MatTimeInputs implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
