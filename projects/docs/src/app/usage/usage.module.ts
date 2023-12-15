import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { MatNativeDateTimeModule, MatTimepickerModule } from 'mat-timepicker';
import { BasicComponent } from './basic/basic.component';
import { CustomToggleIconComponent } from './custom-toggle-icon/custom-toggle-icon.component';
import { InputModeComponent } from './input-mode/input-mode.component';
import { FormatComponent } from './format/format.component';
import { DialogComponent } from './dialog/dialog.component';
import { ColorPaletteComponent } from './color-palette/color-palette.component';
import { HorizontalComponent } from './horizontal/horizontal.component';
import { ValidationComponent } from './validation/validation.component';
import { EventsComponent } from './events/events.component';
import { DisablingComponent } from './disabling/disabling.component';
import { ActionButtonsComponent } from './action-buttons/action-buttons.component';
import { ManuallyToggleComponent } from './manually-toggle/manually-toggle.component';
import { InlineComponent } from './inline/inline.component';

@NgModule({
  declarations: [
    BasicComponent,
    CustomToggleIconComponent,
    InputModeComponent,
    FormatComponent,
    DialogComponent,
    ColorPaletteComponent,
    HorizontalComponent,
    ValidationComponent,
    EventsComponent,
    DisablingComponent,
    ActionButtonsComponent,
    ManuallyToggleComponent,
    InlineComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatTimepickerModule,
    MatNativeDateTimeModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'fill' },
    },
  ],
})
export class UsageModule {}
