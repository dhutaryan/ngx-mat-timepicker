import { PlatformModule } from '@angular/cdk/platform';
import { ModuleWithProviders, NgModule, Provider } from '@angular/core';

import { MAT_TIME_LOCALE_PROVIDER, TimeAdapter } from './time-adapter';
import { NativeDateTimeAdapter } from './native-date-time-adapter';

export * from './time-adapter';
export * from './native-date-time-adapter';

@NgModule({
  imports: [PlatformModule],
  providers: [{ provide: TimeAdapter, useClass: NativeDateTimeAdapter }],
})
export class NativeDateTimeModule {}

@NgModule({
  providers: [provideNativeDateTimeAdapter()],
})
export class MatNativeDateTimeModule {}

export function provideNativeDateTimeAdapter(): Provider {
  return { provide: TimeAdapter, useClass: NativeDateTimeAdapter };
}
