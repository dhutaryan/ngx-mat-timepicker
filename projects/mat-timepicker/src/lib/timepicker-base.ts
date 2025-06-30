import {
  Input,
  ComponentRef,
  ViewContainerRef,
  Directive,
  NgZone,
  Inject,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  ElementRef,
  InjectionToken,
  Optional,
  booleanAttribute,
  inject,
  DOCUMENT,
} from '@angular/core';

import { ThemePalette } from '@angular/material/core';
import { _getFocusedElementPierceShadowDom } from '@angular/cdk/platform';
import {
  BooleanInput,
  coerceBooleanProperty,
  coerceNumberProperty,
} from '@angular/cdk/coercion';
import {
  FlexibleConnectedPositionStrategy,
  Overlay,
  OverlayConfig,
  OverlayRef,
  ScrollStrategy,
} from '@angular/cdk/overlay';
import {
  ComponentPortal,
  ComponentType,
  TemplatePortal,
} from '@angular/cdk/portal';
import {
  DOWN_ARROW,
  ESCAPE,
  hasModifierKey,
  PAGE_DOWN,
  PAGE_UP,
  UP_ARROW,
} from '@angular/cdk/keycodes';
import { filter, first, merge, Observable, Subject, take } from 'rxjs';

import { MatTimepickerContent } from './timepicker-content';
import { MAT_TIMEPICKER_SCROLL_STRATEGY } from './timepicker-scroll-strategy';
import {
  ExtractTimeTypeFromSelection,
  MatTimeSelectionModel,
} from './time-selection-model';
import { MAT_DEFAULT_ACITONS } from './timepicker-actions-default';
import { TimepickerOrientation } from './orientation';

/** Possible options for the timepicker to open. */
export type TimepickerOpenAs = 'dialog' | 'popup';

/** Possible positions for the timepicker dropdown along the X axis. */
export type TimepickerDropdownPositionX = 'start' | 'end';

/** Possible positions for the timepicker dropdown along the Y axis. */
export type TimepickerDropdownPositionY = 'above' | 'below';

/** Possible options for the timepicker to display. */
export type TimepickerMode = 'input' | 'dial';

/** Possible options for the timepicker period format. */
export type TimepickerFormat = '12h' | '24h';

/** Form control that can be associated with a timepicker. */
export interface MatTimepickerControl<T> {
  disabled: boolean;
  min: T | null;
  max: T | null;
  stateChanges: Observable<void>;
  getThemePalette(): ThemePalette;
  getConnectedOverlayOrigin(): ElementRef;
  getOverlayLabelId(): string | null;
}

/** A timepicker that can be attached to a {@link MatTimepickerControl}. */
export interface MatTimepickerPanel<
  C extends MatTimepickerControl<T>,
  S,
  T = ExtractTimeTypeFromSelection<S>,
> {
  /** Stream that emits whenever the timepicker is opened. */
  openedStream: EventEmitter<void>;
  /** Stream that emits whenever the timepicker is closed. */
  closedStream: EventEmitter<void>;
  /** Emits when the timepicker's state changes. */
  stateChanges: Subject<void>;
  /** Register an input with the timeepicker. */
  registerInput(input: C): MatTimeSelectionModel<S, T>;
}

/**
 * Represents the default options for the form field that can be configured
 * using the `MAT_TIMEPICKER_DEFAULT_OPTIONS` injection token.
 */
export interface MatTimepickerDefaultOptions {
  /** Default color of the timepicker. */
  color?: ThemePalette;
  /** Default timepicker mode. */
  mode: TimepickerMode;
  /** Defines how timepicker will be appeared. */
  openAs: TimepickerOpenAs;
  /** Default timepicker format. */
  format: TimepickerFormat;
  /** Should toggle face button be visible. */
  showToggleModeButton: boolean;
  /** Step for minutes. */
  minuteInterval: number;
  /** Orientation for dial mode. */
  orientation: TimepickerOrientation;
}

/**
 * Injection token that can be used to configure the
 * default options for all timepickers within an app.
 */
export const MAT_TIMEPICKER_DEFAULT_OPTIONS =
  new InjectionToken<MatTimepickerDefaultOptions>(
    'MAT_TIMEPICKER_DEFAULT_OPTIONS',
  );

/** Default open as used by the timepicker. */
const DEFAULT_OPEN_AS: TimepickerOpenAs = 'popup';

/** Default mode used by the timepicker. */
const DEFAULT_MODE: TimepickerMode = 'dial';

/** Default format used by the timepicker. */
const DEFAULT_FORMAT: TimepickerFormat = '12h';

/** Used to generate a unique ID for each timepicker instance. */
let timepickerUid = 0;

@Directive()
export abstract class MatTimepickerBase<
  C extends MatTimepickerControl<T>,
  S,
  T = ExtractTimeTypeFromSelection<S>,
> implements OnChanges
{
  /** Whether the timepicker pop-up should be disabled. */
  @Input()
  get disabled(): boolean {
    return this._disabled === undefined && this.timepickerInput
      ? this.timepickerInput.disabled
      : !!this._disabled;
  }
  set disabled(value: BooleanInput) {
    const newValue = coerceBooleanProperty(value);

    if (newValue !== this._disabled) {
      this._disabled = newValue;
      this.stateChanges.next(undefined);
    }
  }
  private _disabled: boolean;

  /** Whether the timepicker is open. */
  @Input()
  get opened(): boolean {
    return this._opened;
  }
  set opened(value: BooleanInput) {
    coerceBooleanProperty(value) ? this.open() : this.close();
  }
  private _opened = false;

  /** Whether the timepicker mode which determines what the timepicker will be opened as. */
  @Input()
  get openAs(): TimepickerOpenAs {
    return this._openAs || this._defaults?.openAs || DEFAULT_OPEN_AS;
  }
  set openAs(value: TimepickerOpenAs) {
    this._openAs = value;
  }
  private _openAs: TimepickerOpenAs;

  /** Color palette to use on the timepicker's content. */
  @Input()
  get color(): ThemePalette {
    return (
      this._color ||
      this._defaults?.color ||
      (this.timepickerInput
        ? this.timepickerInput.getThemePalette()
        : undefined)
    );
  }
  set color(value: ThemePalette) {
    this._color = value;
  }
  private _color: ThemePalette;

  /** Timepicker display mode. */
  @Input()
  get mode(): TimepickerMode {
    return this._mode || this._defaults?.mode || DEFAULT_MODE;
  }
  set mode(value: TimepickerMode) {
    this._mode = value;
  }
  private _mode: TimepickerMode;

  /** Timepicker period format. */
  @Input()
  get format(): TimepickerFormat {
    return this._format || this._defaults?.format || DEFAULT_FORMAT;
  }
  set format(value: TimepickerFormat) {
    this._format = value;
  }
  private _format: TimepickerFormat;

  /** Show or hide toggle button between dial and input. */
  @Input()
  get showToggleModeButton(): boolean {
    return this._showToggleModeButton;
  }
  set showToggleModeButton(value: boolean) {
    this._showToggleModeButton = value;
  }
  private _showToggleModeButton: boolean = true;

  /** Step for minutes. */
  @Input()
  get minuteInterval(): number {
    return this._minuteInterval || this._defaults?.minuteInterval || 1;
  }
  set minuteInterval(value: number) {
    this._minuteInterval = coerceNumberProperty(value);
  }
  private _minuteInterval: number;

  /** Orientation for dial mode. */
  @Input()
  get orientation(): TimepickerOrientation {
    return this._orientation || this._defaults?.orientation || 'vertical';
  }
  set orientation(value: TimepickerOrientation) {
    this._orientation = value;
  }
  private _orientation: TimepickerOrientation;

  /**
   * Whether the timepicker UI is in touch mode. In touch mode elements are larger for bigger touch targets.
   */
  @Input({ transform: booleanAttribute })
  get touchUi(): boolean {
    return this._touchUi;
  }
  set touchUi(value: boolean) {
    this._touchUi = coerceBooleanProperty(value);

    if (value) {
      this.openAs = 'dialog';
    }
  }
  private _touchUi: boolean = false;

  /** Preferred position of the timepicker in the X axis. */
  @Input()
  xPosition: TimepickerDropdownPositionX = 'start';

  /** Preferred position of the timepicker in the Y axis. */
  @Input()
  yPosition: TimepickerDropdownPositionY = 'below';

  /**
   * Whether to restore focus to the previously-focused element when the timepicker is closed.
   * Note that automatic focus restoration is an accessibility feature and it is recommended that
   * you provide your own equivalent, if you decide to turn it off.
   */
  @Input({ transform: booleanAttribute })
  restoreFocus: boolean = true;

  /** Emits when the timepicker has been opened. */
  @Output('opened') readonly openedStream = new EventEmitter<void>();

  /** Emits when the timepicker has been closed. */
  @Output('closed') readonly closedStream = new EventEmitter<void>();

  /** The id for the timepicker. */
  id: string = `mat-timepicker-${timepickerUid++}`;

  /** The input element this timepicker is associated with. */
  timepickerInput!: C;

  /** Portal with projected action buttons. */
  _actionsPortal: TemplatePortal | null = null;

  /** Emits when the timepicker's state changes. */
  readonly stateChanges = new Subject<void>();

  /** A reference to the overlay into which we've rendered the timepicker. */
  private _overlayRef: OverlayRef | null;

  /** Reference to the component instance rendered in the overlay. */
  private _componentRef!: ComponentRef<MatTimepickerContent<S, T>> | null;

  /** Unique class that will be added to the backdrop so that the test harnesses can look it up. */
  private _backdropHarnessClass = `${this.id}-backdrop`;

  /** The element that was focused before the timepicker was opened. */
  private _focusedElementBeforeOpen: HTMLElement | null = null;

  private _document = inject(DOCUMENT);

  /** Scroll strategy. */
  private _scrollStrategy: () => ScrollStrategy;

  /** The minimum selectable time. */
  _getMinTime(): T | null {
    return this.timepickerInput && this.timepickerInput.min;
  }

  /** The maximum selectable time. */
  _getMaxTime(): T | null {
    return this.timepickerInput && this.timepickerInput.max;
  }

  constructor(
    private _viewContainerRef: ViewContainerRef,
    private _overlay: Overlay,
    private _ngZone: NgZone,
    @Inject(MAT_TIMEPICKER_SCROLL_STRATEGY) scrollStrategy: any,
    @Inject(MAT_DEFAULT_ACITONS)
    private _defaultActionsComponent: ComponentType<any>,
    private _model: MatTimeSelectionModel<S, T>,
    @Optional()
    @Inject(MAT_TIMEPICKER_DEFAULT_OPTIONS)
    private _defaults?: MatTimepickerDefaultOptions,
  ) {
    this._scrollStrategy = scrollStrategy;

    if (_defaults) {
      this.showToggleModeButton =
        _defaults.showToggleModeButton !== undefined
          ? _defaults.showToggleModeButton
          : true;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    const positionChange = changes['xPosition'] || changes['yPosition'];

    if (positionChange && !positionChange.firstChange && this._overlayRef) {
      const positionStrategy = this._overlayRef.getConfig().positionStrategy;

      if (positionStrategy instanceof FlexibleConnectedPositionStrategy) {
        this._setConnectedPositions(positionStrategy);

        if (this.opened) {
          this._overlayRef.updatePosition();
        }
      }
    }

    this.stateChanges.next(undefined);
  }

  ngOnDestroy() {
    this._destroyOverlay();
    this.close();
    this.stateChanges.complete();
  }

  /** Opens the timepicker. */
  open(): void {
    if (
      this._opened ||
      this.disabled ||
      this._componentRef?.instance._isAnimating
    ) {
      return;
    }

    if (!this.timepickerInput) {
      throw Error(
        'Attempted to open an MatTimepicker with no associated input.',
      );
    }

    this._focusedElementBeforeOpen = _getFocusedElementPierceShadowDom();
    this._openOverlay();
    this._opened = true;
    this.openedStream.emit();
  }

  /** Closes the timepicker. */
  close(): void {
    if (!this._opened || this._componentRef?.instance._isAnimating) {
      return;
    }

    const canRestoreFocus =
      this.restoreFocus &&
      this._focusedElementBeforeOpen &&
      typeof this._focusedElementBeforeOpen.focus === 'function';

    const completeClose = () => {
      // The `_opened` could've been reset already if
      // we got two events in quick succession.
      if (this._opened) {
        this._opened = false;
        this.closedStream.emit();
      }
    };

    if (this._componentRef) {
      const { instance, location } = this._componentRef;
      instance._startExitAnimation();
      instance._animationDone.pipe(take(1)).subscribe(() => {
        const activeElement = this._document.activeElement;

        // Since we restore focus after the exit animation, we have to check that
        // the user didn't move focus themselves inside the `close` handler.
        if (
          canRestoreFocus &&
          (!activeElement ||
            activeElement === this._document.activeElement ||
            location.nativeElement.contains(activeElement))
        ) {
          this._focusedElementBeforeOpen!.focus();
        }

        this._focusedElementBeforeOpen = null;
        this._destroyOverlay();
      });

      if (canRestoreFocus) {
        setTimeout(completeClose);
      } else {
        completeClose();
      }
    }
  }

  /**
   * Register an input with this timepicker.
   * @param input The timepicker input to register with this timepicker.
   * @returns Selection model that the input should hook itself up to.
   */
  registerInput(input: C): MatTimeSelectionModel<S, T> {
    if (this.timepickerInput) {
      throw Error(
        'A MatTimepicker can only be associated with a single input.',
      );
    }

    this.timepickerInput = input;
    return this._model;
  }

  /**
   * Registers a portal containing action buttons with the timepicker.
   * @param portal Portal to be registered.
   */
  registerActions(portal: TemplatePortal): void {
    if (this._actionsPortal) {
      throw Error(
        'A MatTimepicker can only be associated with a single actions row.',
      );
    }
    this._actionsPortal = portal;
    this._componentRef?.instance._assignActions(portal, true);
  }

  /**
   * Removes a portal containing action buttons from the timepicker.
   * @param portal Portal to be removed.
   */
  removeActions(portal: TemplatePortal): void {
    if (portal === this._actionsPortal) {
      this._actionsPortal = null;
      this._componentRef?.instance._assignActions(null, true);
    }
  }

  /** Applies the current pending selection on the overlay to the model. */
  _applyPendingSelection() {
    this._componentRef?.instance?._applyPendingSelection();
  }

  /** Forwards relevant values from the timepicker to the timepicker content inside the overlay. */
  protected _forwardContentValues(instance: MatTimepickerContent<S, T>): void {
    const defaultPortal = new ComponentPortal(this._defaultActionsComponent);

    instance.timepicker = this;
    instance.color = this.color;
    instance.mode = this.mode;
    instance.isMeridiem = this.format === '12h';
    instance.showToggleModeButton = this.showToggleModeButton;
    instance.minuteInterval = this.minuteInterval;
    instance.orientation = this.orientation;
    instance._dialogLabelId = this.timepickerInput.getOverlayLabelId();
    instance._assignActions(this._actionsPortal || defaultPortal, false);
  }

  /** Opens the overlay with the timepicker. */
  private _openOverlay(): void {
    this._destroyOverlay();

    const isDialog = this.openAs === 'dialog';
    const portal = new ComponentPortal<MatTimepickerContent<S, T>>(
      MatTimepickerContent,
      this._viewContainerRef,
    );

    const overlayRef = (this._overlayRef = this._overlay.create(
      new OverlayConfig({
        positionStrategy: isDialog
          ? this._getDialogStrategy()
          : this._getDropdownStrategy(),
        hasBackdrop: true,
        backdropClass: [
          isDialog
            ? 'cdk-overlay-dark-backdrop'
            : 'mat-overlay-transparent-backdrop',
          this._backdropHarnessClass,
        ],
        direction: 'ltr',
        scrollStrategy: isDialog
          ? this._overlay.scrollStrategies.block()
          : this._scrollStrategy(),
        panelClass: `mat-timepicker-${this.openAs}`,
      }),
    ));

    this._getCloseStream(overlayRef).subscribe((event) => {
      if (event) {
        event.preventDefault();
      }
      this.close();
    });

    // The `preventDefault` call happens inside the timepicker as well, however focus moves into
    // it inside a timeout which can give browsers a chance to fire off a keyboard event in-between
    // that can scroll the page. Always block default actions of arrow keys for the
    // entire overlay so the page doesn't get scrolled by accident.
    overlayRef.keydownEvents().subscribe((event) => {
      const keyCode = event.keyCode;

      if (
        keyCode === UP_ARROW ||
        keyCode === DOWN_ARROW ||
        keyCode === PAGE_UP ||
        keyCode === PAGE_DOWN
      ) {
        event.preventDefault();
      }
    });

    this._componentRef = overlayRef.attach(portal);
    this._forwardContentValues(this._componentRef.instance);

    // Update the position once the timepicker has rendered. Only relevant in dropdown mode.
    if (!isDialog) {
      this._ngZone.onStable
        .pipe(first())
        .subscribe(() => overlayRef.updatePosition());
    }
  }

  /** Destroys the current overlay. */
  private _destroyOverlay(): void {
    if (this._overlayRef) {
      this._overlayRef.dispose();
      this._overlayRef = this._componentRef = null;
    }
  }

  /** Gets a position strategy that will open the timepicker as a dropdown. */
  private _getDialogStrategy() {
    return this._overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();
  }

  /** Gets a position strategy that will open the timepicker as a dropdown. */
  private _getDropdownStrategy() {
    const strategy = this._overlay
      .position()
      .flexibleConnectedTo(this.timepickerInput.getConnectedOverlayOrigin())
      .withTransformOriginOn('.mat-timepicker-content')
      .withFlexibleDimensions(false)
      .withViewportMargin(8)
      .withLockedPosition();

    return this._setConnectedPositions(strategy);
  }

  /** Sets the positions of the timepicker in dropdown mode based on the current configuration. */
  private _setConnectedPositions(
    strategy: FlexibleConnectedPositionStrategy,
  ): FlexibleConnectedPositionStrategy {
    const primaryX = this.xPosition === 'end' ? 'end' : 'start';
    const secondaryX = primaryX === 'start' ? 'end' : 'start';
    const primaryY = this.yPosition === 'above' ? 'bottom' : 'top';
    const secondaryY = primaryY === 'top' ? 'bottom' : 'top';

    return strategy.withPositions([
      {
        originX: primaryX,
        originY: secondaryY,
        overlayX: primaryX,
        overlayY: primaryY,
      },
      {
        originX: primaryX,
        originY: primaryY,
        overlayX: primaryX,
        overlayY: secondaryY,
      },
      {
        originX: secondaryX,
        originY: secondaryY,
        overlayX: secondaryX,
        overlayY: primaryY,
      },
      {
        originX: secondaryX,
        originY: primaryY,
        overlayX: secondaryX,
        overlayY: secondaryY,
      },
    ]);
  }

  /** Gets an observable that will emit when the overlay is supposed to be closed. */
  private _getCloseStream(
    overlayRef: OverlayRef,
  ): Observable<void | KeyboardEvent | MouseEvent> {
    return merge(
      overlayRef.backdropClick(),
      overlayRef.detachments(),
      overlayRef.keydownEvents().pipe(
        filter((event) => {
          // Closing on alt + up is only valid when there's an input associated with the timepicker.
          return (
            (event.keyCode === ESCAPE && !hasModifierKey(event)) ||
            (this.timepickerInput &&
              hasModifierKey(event, 'altKey') &&
              event.keyCode === UP_ARROW)
          );
        }),
      ),
    );
  }
}
