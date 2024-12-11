import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'docs-disabling',
  templateUrl: './disabling.component.html',
  styles: `
    .mat-mdc-form-field {
      display: block;
      width: max-content;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class DisablingComponent {}
