import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'docs-action-buttons',
  templateUrl: './action-buttons.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ActionButtonsComponent {}
