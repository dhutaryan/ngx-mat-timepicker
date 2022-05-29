import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { MatTimepickerToggle } from './timepicker-toggle';
import { MatTimepicker } from './timepicker';

@NgModule({
  declarations: [MatTimepickerToggle, MatTimepicker],
  imports: [CommonModule, MatButtonModule],
  exports: [MatTimepickerToggle, MatTimepicker],
})
export class MatTimepickerModule {}
