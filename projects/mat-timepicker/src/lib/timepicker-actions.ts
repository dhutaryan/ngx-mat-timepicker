import { TemplatePortal } from '@angular/cdk/portal';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Directive,
  ElementRef,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
} from '@angular/core';
import { mixinColor } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

import { MatTimepickerBase, MatTimepickerControl } from './timepicker-base';

/** Button that will close the timepicker and assign the current selection to the data model. */
@Directive({
  selector: '[matTimepickerApply]',
  standalone: true,
  host: {
    '(click)': '_applySelection()',
  },
})
export class MatTimepickerApply {
  constructor(private _timepicker: MatTimepickerBase<MatTimepickerControl<any>, unknown>) {}

  _applySelection() {
    this._timepicker._applyPendingSelection();
    this._timepicker.close();
  }
}

/** Button that will close the timepicker and discard the current selection. */
@Directive({
  selector: '[matTimepickerCancel]',
  standalone: true,
  host: {
    '(click)': 'close()',
  },
})
export class MatTimepickerCancel {
  constructor(private _timepicker: MatTimepickerBase<MatTimepickerControl<any>, unknown>) {}

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
  standalone: true,
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
  host: {
    class: 'mat-timepicker-actions-container',
  },
})
export class MatTimepickerActions implements AfterViewInit, OnDestroy {
  @ViewChild(TemplateRef) _template: TemplateRef<unknown>;

  private _portal: TemplatePortal;

  constructor(
    private _timepicker: MatTimepickerBase<MatTimepickerControl<any>, unknown>,
    private _viewContainerRef: ViewContainerRef,
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

// Boilerplate for applying mixins to MatTimepickerDefaultActions.
const _MatTimepickerDefaultActions = mixinColor(
  class {
    constructor(public _elementRef: ElementRef) {}
  },
);

/**
 * Default action buttons to the bottom of a timepicker.
 */
@Component({
  selector: 'mat-timepicker-default-actions',
  standalone: true,
  imports: [MatButtonModule, MatTimepickerApply, MatTimepickerCancel],
  styleUrls: ['timepicker-actions.scss'],
  template: `
    <div class="mat-timepicker-actions">
      <ng-content></ng-content>
      <button [color]="color" mat-button matTimepickerCancel>Cancel</button>
      <button [color]="color" mat-button matTimepickerApply>OK</button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'mat-timepicker-actions-container',
  },
})
export class MatTimepickerDefaultActions extends _MatTimepickerDefaultActions implements OnInit {
  constructor(
    elementRef: ElementRef,
    private _timepicker: MatTimepickerBase<MatTimepickerControl<any>, unknown>,
  ) {
    super(elementRef);
  }

  ngOnInit() {
    this.color = this._timepicker.color;
  }
}
