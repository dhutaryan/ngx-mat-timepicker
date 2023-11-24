import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'demo-events',
  templateUrl: './events.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventsComponent {
  events: string[] = [];

  addEvent(type: string, event: any): void {
    this.events.push(`${type}: ${event.value}`);
  }
}
