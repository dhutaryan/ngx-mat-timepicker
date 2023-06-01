import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  date = new Date();
  min = new Date(2023, 4, 9, 5, 40);
  max = new Date(2023, 4, 9, 21, 15);

  ngOnInit() {}
}
