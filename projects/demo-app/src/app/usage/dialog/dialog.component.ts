import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'demo-dialog',
  templateUrl: './dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent {}
