import { animate, style, transition, trigger } from '@angular/animations';

const visible = { transform: 'scale(1)', opacity: 1, visibility: 'visible' };
const hidden = { transform: 'scale(1.05)', opacity: 0, visibility: 'hidden' };

export const enterLeaveAnimation = trigger('enterLeaveAnimation', [
  transition(':enter', [
    style(hidden),
    animate('0.1s ease-out', style(visible)),
  ]),
  transition(':leave', [style(visible), animate('0s ease-in', style(hidden))]),
]);
