import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MatTimepickerInputEvent } from 'mat-timepicker';

@Component({
  selector: 'docs-events',
  templateUrl: './events.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class EventsComponent {
  events: string[] = [];

  addEvent(type: string, event: MatTimepickerInputEvent<Date>): void {
    this.events.push(`${type}: ${event.value}`);
  }
}
