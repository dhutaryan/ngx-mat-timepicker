import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CdkScrollableModule } from '@angular/cdk/scrolling';
import { MatButtonModule } from '@angular/material/button';

import {
  MatTimepickerToggle,
  MatTimepickerToggleIcon,
} from './timepicker-toggle';
import { MatTimepicker } from './timepicker';
import { MatTimepickerContent } from './timepicker-content';
import { MatTimepickerInput } from './timepicker-input';
import { MAT_TIMEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER } from './timepicker-scroll-strategy';

@NgModule({
  declarations: [
    MatTimepickerToggle,
    MatTimepickerToggleIcon,
    MatTimepicker,
    MatTimepickerContent,
    MatTimepickerInput,
  ],
  imports: [CommonModule, MatButtonModule, OverlayModule, PortalModule],
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
