import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'docs-custom-toggle-icon',
  templateUrl: './custom-toggle-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CustomToggleIconComponent {}
