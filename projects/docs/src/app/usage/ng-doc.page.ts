import { NgDocPage } from '@ng-doc/core';

import { UsageModule } from './usage.module';
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
import { TouchUiComponent } from './touch-ui/touch-ui.component';

const Usage: NgDocPage = {
  title: `Usage`,
  mdFile: './index.md',
  order: 2,
  imports: [UsageModule],
  demos: {
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
    TouchUiComponent,
  },
};

export default Usage;
