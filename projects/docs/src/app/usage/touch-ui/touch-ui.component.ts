import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'docs-touch-ui',
  templateUrl: './touch-ui.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class TouchUiComponent {}
