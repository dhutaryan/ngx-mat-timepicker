import { TemplatePortal } from '@angular/cdk/portal';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Directive,
  OnDestroy,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
} from '@angular/core';

import { MatTimepickerBase, MatTimepickerControl } from './timepicker-base';

/** Button that will close the timepicker and assign the current selection to the data model. */
@Directive({
  selector: '[matTimepickerApply]',
  host: {
    '(click)': '_applySelection()',
  },
})
export class MatTimepickerApply {
  constructor(
    private _timepicker: MatTimepickerBase<MatTimepickerControl<any>, unknown>
  ) {}

  _applySelection() {
    this._timepicker._applyPendingSelection();
    this._timepicker.close();
  }
}

/** Button that will close the timepicker and discard the current selection. */
@Directive({
  selector: '[matTimepickerCancel]',
  host: {
    '(click)': 'close()',
  },
})
export class MatTimepickerCancel {
  constructor(
    private _timepicker: MatTimepickerBase<MatTimepickerControl<any>, unknown>
  ) {}

  close() {
    this._timepicker.close();
  }
}

/**
 * Container that can be used to project a row of action buttons
 * to the bottom of a timepicker.
 */
@Component({
  selector: 'mat-timepicker-actions',
  styleUrls: ['timepicker-actions.scss'],
  template: `
    <ng-template>
      <div class="mat-timepicker-actions">
        <ng-content></ng-content>
      </div>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class MatTimepickerActions implements AfterViewInit, OnDestroy {
  @ViewChild(TemplateRef) _template: TemplateRef<unknown>;

  private _portal: TemplatePortal;

  constructor(
    private _timepicker: MatTimepickerBase<MatTimepickerControl<any>, unknown>,
    private _viewContainerRef: ViewContainerRef
  ) {}

  ngAfterViewInit() {
    this._portal = new TemplatePortal(this._template, this._viewContainerRef);
    this._timepicker.registerActions(this._portal);
  }

  ngOnDestroy() {
    this._timepicker.removeActions(this._portal);

    // Needs to be null checked since we initialize it in `ngAfterViewInit`.
    if (this._portal && this._portal.isAttached) {
      this._portal?.detach();
    }
  }
}

/**
 * Default action buttons to the bottom of a timepicker.
 */
@Component({
  selector: 'mat-timepicker-default-actions',
  styleUrls: ['timepicker-actions.scss'],
  template: `
    <div class="mat-timepicker-actions">
      <ng-content></ng-content>
      <button color="primary" mat-button matTimepickerCancel>Cancel</button>
      <button color="primary" mat-button matTimepickerApply>OK</button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class MatTimepickerDefaultActions {}
