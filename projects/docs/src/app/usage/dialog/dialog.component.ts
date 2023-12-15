import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'docs-dialog',
  templateUrl: './dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent {}
