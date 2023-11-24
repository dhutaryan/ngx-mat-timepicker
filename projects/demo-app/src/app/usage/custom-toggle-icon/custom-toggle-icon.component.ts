import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'demo-custom-toggle-icon',
  templateUrl: './custom-toggle-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomToggleIconComponent {}
