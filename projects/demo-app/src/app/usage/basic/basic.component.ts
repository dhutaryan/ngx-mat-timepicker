import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'demo-basic',
  templateUrl: './basic.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicComponent {}
