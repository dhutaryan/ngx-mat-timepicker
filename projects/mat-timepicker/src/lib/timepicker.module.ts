import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CdkScrollableModule } from '@angular/cdk/scrolling';
import { A11yModule } from '@angular/cdk/a11y';
import {
  MAT_FAB_DEFAULT_OPTIONS,
  MatButtonModule,
} from '@angular/material/button';
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
import { MatTimepickerContentLayout } from './timepicker-content-layout';
import { MatTimepickerInput } from './timepicker-input';
import { MatHourInput, MatMinuteInput, MatTimeInputs } from './time-inputs';
import { MatClockDials } from './clock-dials';
import { MatHoursClockDial } from './hours-clock-dial';
import { MatMinutesClockDial } from './minutes-clock-dial';
import { MatTimePeriod } from './time-period';
import {
  MatTimepickerActions,
  MatTimepickerApply,
  MatTimepickerCancel,
  MatTimepickerDefaultActions,
} from './timepicker-actions';
import { MAT_DEFAULT_ACITONS } from './timepicker-actions-default';
import { MatTimepickerIntl } from './timepicker-intl';

@NgModule({
  declarations: [
    MatTimepickerToggle,
    MatTimepickerToggleIcon,
    MatTimepicker,
    MatTimepickerContent,
    MatTimepickerContentLayout,
    MatTimepickerInput,
    MatTimeInputs,
    MatHourInput,
    MatMinuteInput,
    MatClockDials,
    MatHoursClockDial,
    MatMinutesClockDial,
    MatTimePeriod,
    MatTimepickerActions,
    MatTimepickerDefaultActions,
    MatTimepickerApply,
    MatTimepickerCancel,
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
    MatTimepickerContentLayout,
    MatTimepickerInput,
    MatTimeInputs,
    MatHourInput,
    MatMinuteInput,
    MatClockDials,
    MatHoursClockDial,
    MatMinutesClockDial,
    MatTimepickerActions,
    MatTimepickerDefaultActions,
    MatTimepickerApply,
    MatTimepickerCancel,
  ],
  providers: [
    MatTimepickerIntl,
    MAT_TIMEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER,
    // { provide: Window, useValue: window },
    { provide: MAT_DEFAULT_ACITONS, useValue: MatTimepickerDefaultActions },
    {
      provide: MAT_FAB_DEFAULT_OPTIONS,
      useValue: { color: 'unthemed' },
    },
  ],
})
export class MatTimepickerModule {}
