import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mat-time-inputs',
  templateUrl: './time-inputs.html',
  styleUrls: ['./time-inputs.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatTimeInputsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
