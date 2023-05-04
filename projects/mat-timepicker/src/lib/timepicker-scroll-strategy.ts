import { InjectionToken } from '@angular/core';
import { Overlay, ScrollStrategy } from '@angular/cdk/overlay';

/** Injection token that determines the scroll handling while the timepicker is open. */
export const MAT_TIMEPICKER_SCROLL_STRATEGY = new InjectionToken<
  () => ScrollStrategy
>('mat-timepicker-scroll-strategy');

/** Timepicker scroll strategy factory. */
export function MAT_TIMEPICKER_SCROLL_STRATEGY_FACTORY(
  overlay: Overlay
): () => ScrollStrategy {
  return () => overlay.scrollStrategies.reposition();
}

/** Timepicker scroll strategy provider. */
export const MAT_TIMEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER = {
  provide: MAT_TIMEPICKER_SCROLL_STRATEGY,
  deps: [Overlay],
  useFactory: MAT_TIMEPICKER_SCROLL_STRATEGY_FACTORY,
};
