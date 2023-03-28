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
  timeControl = new FormControl(this.date);

  ngOnInit() {
    this.timeControl.valueChanges.subscribe(console.log);
  }
}
