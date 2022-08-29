import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mat-clock-dial',
  templateUrl: './clock-dial.html',
  styleUrls: ['./clock-dial.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatClockDial implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
