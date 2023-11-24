import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'demo-color-palette',
  templateUrl: './color-palette.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorPaletteComponent {}
