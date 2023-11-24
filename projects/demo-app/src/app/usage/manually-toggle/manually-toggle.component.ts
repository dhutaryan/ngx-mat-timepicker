import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'demo-manually-toggle',
  templateUrl: './manually-toggle.component.html',
  styles: `
    .mat-mdc-form-field {
      margin-right: 1rem;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManuallyToggleComponent {}
