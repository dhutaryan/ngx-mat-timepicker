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
  AfterViewInit,
  ViewChild,
  inject,
  NgZone,
  Renderer2,
} from '@angular/core';

import { MATERIAL_ANIMATIONS, ThemePalette } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { Subject, Subscription } from 'rxjs';

import {
  ExtractTimeTypeFromSelection,
  MatTimeSelectionModel,
} from './time-selection-model';
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
    '[class.mat-timepicker-content-touch]': 'timepicker.touchUi',
    '[class.mat-timepicker-content-animations-enabled]': '!_animationsDisabled',
  },
})
export class MatTimepickerContent<S, T = ExtractTimeTypeFromSelection<S>>
  implements AfterViewInit
{
  /** Reference to the internal clock dials component. */
  @ViewChild(MatClockDials) _dials: MatClockDials<T> | undefined;

  /** Reference to the internal time inputs component. */
  @ViewChild(MatTimeInputs) _inputs: MatTimeInputs<T> | undefined;

  /** Reference to the timepicker that created the overlay. */
  timepicker: MatTimepickerBase<any, S, T>;

  /** Display mode. */
  mode: TimepickerMode;

  /** Whether the animation is disabled. */
  protected _animationsDisabled = inject(MATERIAL_ANIMATIONS, {
    optional: true,
  })?.animationsDisabled;

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

  protected _elementRef = inject<ElementRef<HTMLElement>>(ElementRef);

  private _ngZone = inject(NgZone);
  private _model: MatTimeSelectionModel<S, T>;
  private _stateChanges: Subscription | undefined;
  private _eventCleanups: (() => void)[] | undefined;
  private _animationFallback: ReturnType<typeof setTimeout> | undefined;

  constructor(
    private _globalModel: MatTimeSelectionModel<S, T>,
    private _changeDetectorRef: ChangeDetectorRef,
  ) {
    this._closeButtonText = inject(MatTimepickerIntl).closeTimepickerLabel;

    if (!this._animationsDisabled) {
      const element = this._elementRef.nativeElement;
      const renderer = inject(Renderer2);

      this._eventCleanups = this._ngZone.runOutsideAngular(() => [
        renderer.listen(element, 'animationstart', this._handleAnimationEvent),
        renderer.listen(element, 'animationend', this._handleAnimationEvent),
        renderer.listen(element, 'animationcancel', this._handleAnimationEvent),
      ]);
    }
  }

  ngAfterViewInit() {
    this._stateChanges = this.timepicker.stateChanges.subscribe(() => {
      this._changeDetectorRef.markForCheck();
    });
    (this._dials || this._inputs)?.focusActiveCell();
  }

  ngOnDestroy() {
    clearTimeout(this._animationFallback);
    this._eventCleanups?.forEach((cleanup) => cleanup());
    this._stateChanges?.unsubscribe();
    this._animationDone.complete();
  }

  /** Changes animation state while closing timepicker content. */
  _startExitAnimation() {
    this._elementRef.nativeElement.classList.add('mat-timepicker-content-exit');

    if (this._animationsDisabled) {
      this._animationDone.next();
    } else {
      // Some internal apps disable animations in tests using `* {animation: none !important}`.
      // If that happens, the animation events won't fire and we'll never clean up the overlay.
      // Add a fallback that will fire if the animation doesn't run in a certain amount of time.
      clearTimeout(this._animationFallback);
      this._animationFallback = setTimeout(() => {
        if (!this._isAnimating) {
          this._animationDone.next();
        }
      }, 200);
    }
  }

  private _handleAnimationEvent = (event: AnimationEvent) => {
    const element = this._elementRef.nativeElement;

    if (
      event.target !== element ||
      !event.animationName.startsWith('_mat-timepicker-content')
    ) {
      return;
    }

    clearTimeout(this._animationFallback);
    this._isAnimating = event.type === 'animationstart';
    element.classList.toggle(
      'mat-timepicker-content-animating',
      this._isAnimating,
    );

    if (!this._isAnimating) {
      this._animationDone.next();
    }
  };

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
