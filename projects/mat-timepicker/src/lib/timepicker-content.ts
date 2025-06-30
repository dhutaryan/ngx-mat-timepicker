import { AnimationEvent } from '@angular/animations';
import {
  ComponentPortal,
  PortalModule,
  TemplatePortal,
} from '@angular/cdk/portal';
import { A11yModule } from '@angular/cdk/a11y';
import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ViewEncapsulation,
  ElementRef,
  OnInit,
  AfterViewInit,
  ViewChild,
  signal,
} from '@angular/core';

import { ThemePalette } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { Subject, Subscription } from 'rxjs';

import {
  ExtractTimeTypeFromSelection,
  MatTimeSelectionModel,
} from './time-selection-model';
import { matTimepickerAnimations } from './timepicker-animations';
import { MatTimepickerBase, TimepickerMode } from './timepicker-base';
import { MatTimepickerIntl } from './timepicker-intl';
import { MatClockDials } from './clock-dials';
import { MatTimeInputs } from './time-inputs';
import { TimepickerOrientation } from './orientation';

@Component({
  selector: 'mat-timepicker-content',
  standalone: true,
  imports: [
    PortalModule,
    A11yModule,
    MatTimeInputs,
    MatClockDials,
    MatButtonModule,
  ],
  templateUrl: './timepicker-content.html',
  styleUrls: ['./timepicker-content.scss'],
  exportAs: 'matTimepickerContent',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'mat-timepicker-content',
    '[class]': 'color ? "mat-" + color : ""',
    '[@transformPanel]': '_animationState',
    '(@transformPanel.start)': '_handleAnimationEvent($event)',
    '(@transformPanel.done)': '_handleAnimationEvent($event)',
    '[class.mat-timepicker-content-touch]': 'timepicker.touchUi',
  },
  animations: [
    matTimepickerAnimations.transformPanel,
    matTimepickerAnimations.fadeInTimepicker,
  ],
})
export class MatTimepickerContent<S, T = ExtractTimeTypeFromSelection<S>>
  implements OnInit, AfterViewInit
{
  /** Reference to the internal clock dials component. */
  @ViewChild(MatClockDials) _dials: MatClockDials<T> | undefined;

  /** Reference to the internal time inputs component. */
  @ViewChild(MatTimeInputs) _inputs: MatTimeInputs<T> | undefined;

  /** Reference to the timepicker that created the overlay. */
  timepicker: MatTimepickerBase<any, S, T>;

  /** Display mode. */
  mode: TimepickerMode;

  /** Current state of the animation. */
  _animationState: 'enter-dropdown' | 'enter-dialog' | 'void';

  /** Whether the clock uses 12 hour format. */
  isMeridiem: boolean;

  /** Whether should toggle face button be shown. */
  showToggleModeButton: boolean;

  /** Step for minutes. */
  minuteInterval: number;

  /** Orientation for dial mode. */
  orientation: TimepickerOrientation;

  /** Portal with projected action buttons. */
  _actionsPortal: TemplatePortal | ComponentPortal<any> | null = null;

  /** Id of the label for the `role="dialog"` element. */
  _dialogLabelId: string | null;

  /** Text for the close button. */
  _closeButtonText: string;

  /** Whether the close button currently has focus. */
  _closeButtonFocused: boolean;

  /** Whether there is an in-progress animation. */
  _isAnimating = false;

  /**
   * Theme color of the internal timepicker. This API is supported in M2 themes
   * only, it has no effect in M3 themes.
   */
  color: ThemePalette;

  /** Emits when an animation has finished. */
  readonly _animationDone = new Subject<void>();

  private _model: MatTimeSelectionModel<S, T>;
  private _subscriptions = new Subscription();

  constructor(
    intl: MatTimepickerIntl,
    private _globalModel: MatTimeSelectionModel<S, T>,
    private _changeDetectorRef: ChangeDetectorRef,
  ) {
    this._closeButtonText = intl.closeTimepickerLabel;
  }

  ngOnInit() {
    this._animationState =
      this.timepicker.openAs === 'dialog' ? 'enter-dialog' : 'enter-dropdown';
  }

  ngAfterViewInit() {
    this._subscriptions.add(
      this.timepicker.stateChanges.subscribe(() => {
        this._changeDetectorRef.markForCheck();
      }),
    );
    (this._dials || this._inputs)?.focusActiveCell();
  }

  ngOnDestroy() {
    this._subscriptions.unsubscribe();
    this._animationDone.complete();
  }

  /** Changes animation state while closing timepicker content. */
  _startExitAnimation() {
    this._animationState = 'void';
    this._changeDetectorRef.markForCheck();
  }

  _handleAnimationEvent(event: AnimationEvent) {
    this._isAnimating = event.phaseName === 'start';

    if (!this._isAnimating) {
      this._animationDone.next();
    }
  }

  onToggleMode(mode: TimepickerMode): void {
    this.mode = mode;
  }

  _getSelected() {
    return this._model?.selection as unknown as T | null;
  }

  /** Applies the current pending selection to the global model. */
  _applyPendingSelection() {
    if (this._model !== this._globalModel) {
      this._globalModel.updateSelection(this._model.selection, this);
    }
  }

  /**
   * Assigns a new portal containing the timepicker actions.
   * @param portal Portal with the actions to be assigned.
   * @param forceRerender Whether a re-render of the portal should be triggered. This isn't
   * necessary if the portal is assigned during initialization, but it may be required if it's
   * added at a later point.
   */
  _assignActions(
    portal: TemplatePortal<any> | ComponentPortal<any> | null,
    forceRerender: boolean,
  ) {
    // As we have actions, clone the model so that we have the ability to cancel the selection.
    // Note that we want to assign this as soon as possible,
    // but `_actionsPortal` isn't available in the constructor so we do it in `ngOnInit`.
    this._model = this._globalModel.clone();

    this._actionsPortal = portal;

    if (forceRerender) {
      this._changeDetectorRef.detectChanges();
    }
  }

  _handleUserSelection(event: T) {
    const value = event;
    this._model.add(value);
  }
}
