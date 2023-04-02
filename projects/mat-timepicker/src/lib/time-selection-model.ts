import {
  FactoryProvider,
  Injectable,
  OnDestroy,
  Optional,
  SkipSelf,
} from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { TimeAdapter } from './adapter';

export type ExtractTimeTypeFromSelection<T> = NonNullable<T>;

/**
 * Event emitted by the time selection model when its selection changes.
 * @docs-private
 */
export interface TimeSelectionModelChange<S> {
  /** New value for the selection. */
  selection: S;

  /** Object that triggered the change. */
  source: unknown;

  /** Previous value */
  oldValue?: S;
}

/**
 * A selection model containing a time selection.
 */
@Injectable()
export abstract class MatTimeSelectionModel<
  S,
  T = ExtractTimeTypeFromSelection<S>
> implements OnDestroy
{
  /** The current selection. */
  readonly selection: S;

  private readonly _selectionChanged = new Subject<
    TimeSelectionModelChange<S>
  >();

  /** Emits when the selection has changed. */
  selectionChanged: Observable<TimeSelectionModelChange<S>> =
    this._selectionChanged;

  /**
   * Updates the current selection in the model.
   * @param value New selection that should be assigned.
   * @param source Object that triggered the selection change.
   */
  updateSelection(value: S, source: unknown) {
    const oldValue = (this as { selection: S }).selection;
    (this as { selection: S }).selection = value;
    this._selectionChanged.next({ selection: value, source, oldValue });
  }

  protected constructor(protected _adapter: TimeAdapter<T>) {
    // this.selection = selection;
  }

  ngOnDestroy(): void {
    this._selectionChanged.complete();
  }

  /** Clones the selection model. */
  abstract clone(): MatTimeSelectionModel<S, T>;
}

/**
 * A selection model that contains a single time.
 */
@Injectable()
export class MatSingleTimeSelectionModel<T> extends MatTimeSelectionModel<
  T | null,
  T
> {
  constructor(adapter: TimeAdapter<T>) {
    super(adapter);
  }

  /**
   * Adds a time to the current selection. In the case of a single time selection, the added time
   * simply overwrites the previous selection
   */
  add(time: T | null) {
    super.updateSelection(time, this);
  }

  /** Clones the selection model. */
  clone() {
    const clone = new MatSingleTimeSelectionModel<T>(this._adapter);
    clone.updateSelection(this.selection, this);
    return clone;
  }
}

export function MAT_SINGLE_TIME_SELECTION_MODEL_FACTORY(
  parent: MatSingleTimeSelectionModel<unknown>,
  adapter: TimeAdapter<unknown>
) {
  return parent || new MatSingleTimeSelectionModel(adapter);
}

/**
 * Used to provide a single selection model to a component.
 */
export const MAT_SINGLE_TIME_SELECTION_MODEL_PROVIDER: FactoryProvider = {
  provide: MatTimeSelectionModel,
  deps: [
    [new Optional(), new SkipSelf(), MatSingleTimeSelectionModel],
    TimeAdapter,
  ],
  useFactory: MAT_SINGLE_TIME_SELECTION_MODEL_FACTORY,
};
