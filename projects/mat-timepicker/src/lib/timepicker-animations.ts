import {
  animate,
  state,
  style,
  transition,
  trigger,
  keyframes,
  AnimationTriggerMetadata,
} from '@angular/animations';

/** Animations used by the timepicker. */
export const matTimepickerAnimations: {
  readonly transformPanel: AnimationTriggerMetadata;
  readonly fadeInTimepicker: AnimationTriggerMetadata;
} = {
  /** Transforms the height of the timepicker's. */
  transformPanel: trigger('transformPanel', [
    transition(
      'void => enter-dropdown',
      animate(
        '120ms cubic-bezier(0, 0, 0.2, 1)',
        keyframes([
          style({ opacity: 0, transform: 'scale(1, 0.8)' }),
          style({ opacity: 1, transform: 'scale(1, 1)' }),
        ])
      )
    ),
    transition(
      'void => enter-dialog',
      animate(
        '150ms cubic-bezier(0, 0, 0.2, 1)',
        keyframes([
          style({ opacity: 0, transform: 'scale(0.7)' }),
          style({ transform: 'none', opacity: 1 }),
        ])
      )
    ),
    transition('* => void', animate('100ms linear', style({ opacity: 0 }))),
  ]),

  /** Fades in the content of the timepicker. */
  fadeInTimepicker: trigger('fadeInTimepicker', [
    state('void', style({ opacity: 0 })),
    state('enter', style({ opacity: 1 })),
  ]),
};
