import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'docs-input-mode',
  templateUrl: './input-mode.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputModeComponent {}
