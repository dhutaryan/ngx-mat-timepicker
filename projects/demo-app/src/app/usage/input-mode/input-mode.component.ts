import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'demo-input-mode',
  templateUrl: './input-mode.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputModeComponent {}
