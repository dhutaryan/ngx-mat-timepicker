import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'docs-inline',
  templateUrl: './inline.component.html',
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InlineComponent {
  date = new Date();
}
