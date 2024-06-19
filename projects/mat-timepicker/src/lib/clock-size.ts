const TOUCH_UI_MULTIPLIER = 1.25;
const TOUCH_UI_TICK_MULTIPLIER = 1.5;
const CLOCK_RADIUS = 128;
const CLOCK_TICK_RADIUS = 24;
const CLOCK_OUTER_RADIUS = 100;

export function getClockRadius(touchUi?: boolean): number {
  return touchUi ? CLOCK_RADIUS * TOUCH_UI_MULTIPLIER : CLOCK_RADIUS;
}

export function getClockTickRadius(touchUi?: boolean): number {
  return touchUi
    ? CLOCK_TICK_RADIUS * TOUCH_UI_TICK_MULTIPLIER
    : CLOCK_TICK_RADIUS;
}

export function getClockCorrectedRadius(touchUi?: boolean): number {
  return getClockRadius(touchUi) - getClockTickRadius(touchUi);
}

export function getClockOuterRadius(touchUi?: boolean): number {
  return touchUi
    ? CLOCK_OUTER_RADIUS * TOUCH_UI_MULTIPLIER
    : CLOCK_OUTER_RADIUS;
}

export function getClockInnerRadius(touchUi?: boolean): number {
  return getClockOuterRadius(touchUi) - getClockTickRadius(touchUi) * 2;
}
