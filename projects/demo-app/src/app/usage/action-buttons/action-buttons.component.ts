import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'demo-action-buttons',
  templateUrl: './action-buttons.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionButtonsComponent {}
