import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'demo-format',
  templateUrl: './format.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormatComponent {}
