import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'docs-color-palette',
  templateUrl: './color-palette.component.html',
  styles: `
    .mat-mdc-form-field {
      display: block;
      width: max-content;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorPaletteComponent {}
