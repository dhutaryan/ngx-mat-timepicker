import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CdkScrollableModule } from '@angular/cdk/scrolling';
import { A11yModule } from '@angular/cdk/a11y';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';

import { MAT_TIMEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER } from './timepicker-scroll-strategy';
import {
  MatTimepickerToggle,
  MatTimepickerToggleIcon,
} from './timepicker-toggle';
import { MatTimepicker } from './timepicker';
import { MatTimepickerContent } from './timepicker-content';
import { MatTimepickerContentSkeleton } from './timepicker-content-skeleton';
import { MatTimepickerInput } from './timepicker-input';
import { MatTimeInputs } from './time-inputs';
import { MatClockDial } from './clock-dial';
import { MatTimePeriod } from './time-period';

@NgModule({
  declarations: [
    MatTimepickerToggle,
    MatTimepickerToggleIcon,
    MatTimepicker,
    MatTimepickerContent,
    MatTimepickerContentSkeleton,
    MatTimepickerInput,
    MatTimeInputs,
    MatClockDial,
    MatTimePeriod,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatRippleModule,
    MatDividerModule,
    OverlayModule,
    PortalModule,
    A11yModule,
  ],
  exports: [
    CdkScrollableModule,
    MatTimepickerToggle,
    MatTimepickerToggleIcon,
    MatTimepicker,
    MatTimepickerContent,
    MatTimepickerInput,
  ],
  providers: [MAT_TIMEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER],
})
export class MatTimepickerModule {}
