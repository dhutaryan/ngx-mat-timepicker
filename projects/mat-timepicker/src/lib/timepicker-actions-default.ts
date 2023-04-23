import { ComponentType } from '@angular/cdk/portal';
import { InjectionToken } from '@angular/core';

export const MAT_DEFAULT_ACITONS = new InjectionToken<ComponentType<any>>(
  'MAT_DEFAULT_ACITONS'
);
