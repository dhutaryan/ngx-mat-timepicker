import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'demo-horizontal',
  templateUrl: './horizontal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HorizontalComponent {}
