import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'docs-horizontal',
  templateUrl: './horizontal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class HorizontalComponent {}
