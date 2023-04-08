import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  date = new Date();
  newDate = new Date(2023, 3, 5, 14, 25);
  timeControl = new FormControl(this.date);

  ngOnInit() {
    this.timeControl.valueChanges.subscribe(console.log);
  }
}
