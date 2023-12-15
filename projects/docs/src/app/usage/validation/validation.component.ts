import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'docs-validation',
  templateUrl: './validation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValidationComponent {
  now = new Date();
  min = new Date(2023, 11, 1, 4, 23);
  max = new Date(2023, 11, 1, 20, 45);
}
