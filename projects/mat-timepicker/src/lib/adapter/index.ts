import { PlatformModule } from '@angular/cdk/platform';
import { NgModule } from '@angular/core';

import { MAT_TIME_LOCALE_PROVIDER, TimeAdapter } from './time-adapter';
import { NativeDateTimeAdapter } from './native-date-time-adapter';

export * from './time-adapter';
export * from './native-date-time-adapter';

@NgModule({
  imports: [PlatformModule],
  providers: [
    { provide: TimeAdapter, useClass: NativeDateTimeAdapter },
    MAT_TIME_LOCALE_PROVIDER,
  ],
})
export class MatNativeDateTimeModule {}
