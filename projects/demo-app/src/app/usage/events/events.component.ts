import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MatTimepickerInputEvent } from 'mat-timepicker';

@Component({
  selector: 'demo-events',
  templateUrl: './events.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventsComponent {
  events: string[] = [];

  addEvent(type: string, event: MatTimepickerInputEvent<Date>): void {
    this.events.push(`${type}: ${event.value}`);
  }
}
