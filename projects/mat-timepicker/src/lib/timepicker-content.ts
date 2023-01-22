import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ViewEncapsulation,
  ElementRef,
  OnInit,
} from '@angular/core';
import { mixinColor } from '@angular/material/core';
import { Subject } from 'rxjs';

import { matTimepickerAnimations } from './timepicker-animations';
import { MatTimepickerBase, TimepickerMode } from './timepicker-base';

// Boilerplate for applying mixins to MatTimepickerContent.
const _MatTimepickerContentBase = mixinColor(
  class {
    constructor(public _elementRef: ElementRef) {}
  }
);

@Component({
  selector: 'mat-timepicker-content',
  templateUrl: './timepicker-content.html',
  styleUrls: ['./timepicker-content.scss'],
  exportAs: 'matTimepickerContent',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'mat-timepicker-content',
    '[@transformPanel]': '_animationState',
    '(@transformPanel.done)': '_animationDone.next()',
  },
  animations: [
    matTimepickerAnimations.transformPanel,
    matTimepickerAnimations.fadeInTimepicker,
  ],
})
export class MatTimepickerContent
  extends _MatTimepickerContentBase
  implements OnInit
{
  /** Reference to the timepicker that created the overlay. */
  timepicker: MatTimepickerBase;

  /** Display mode. */
  mode: TimepickerMode;

  /** Current state of the animation. */
  _animationState: 'enter-dropdown' | 'enter-dialog' | 'void';

  /** Whether the clock uses 12 hour format. */
  isMeridiem: boolean;

  /** Emits when an animation has finished. */
  readonly _animationDone = new Subject<void>();

  constructor(
    elementRef: ElementRef,
    private _changeDetectorRef: ChangeDetectorRef
  ) {
    super(elementRef);
  }

  ngOnInit() {
    this._animationState =
      this.timepicker.openAs === 'dialog' ? 'enter-dialog' : 'enter-dropdown';
  }

  /** Changes animation state while closing timepicker content. */
  startExitAnimation() {
    this._animationState = 'void';
    this._changeDetectorRef.markForCheck();
  }

  onToggleMode(mode: TimepickerMode): void {
    this.mode = mode;
  }
}
