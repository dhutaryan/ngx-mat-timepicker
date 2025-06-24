import { Component, ElementRef, Type, ViewChild } from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  flush,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import {
  UntypedFormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

import { MatTimepickerModule } from './timepicker.module';
import { MatTimepicker } from './timepicker';
import { TimepickerOpenAs } from './timepicker-base';
import { MatNativeDateTimeModule } from './adapter';
import { clickDialCell, getDialCell } from './clock-dials.spec';

describe('MatTimepickerActions', () => {
  function createComponent<T>(component: Type<T>): ComponentFixture<T> {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule,
        MatTimepickerModule,
        MatFormFieldModule,
        MatInputModule,
        NoopAnimationsModule,
        ReactiveFormsModule,
        MatNativeDateTimeModule,
      ],
      declarations: [component],
    });

    return TestBed.createComponent(component);
  }

  it('should render the default actions inside content panel if no consumer actions', fakeAsync(() => {
    const fixture = createComponent(TimepickerWithActions);
    fixture.componentInstance.renderActions = false;
    fixture.detectChanges();
    fixture.componentInstance.timepicker.open();
    fixture.detectChanges();
    tick();
    flush();

    const actions = document.querySelector(
      '.mat-timepicker-content .mat-timepicker-actions',
    );
    expect(actions).toBeTruthy();
  }));

  it('should render the actions inside content panel in popup mode', fakeAsync(() => {
    const fixture = createComponent(TimepickerWithActions);
    fixture.detectChanges();
    fixture.componentInstance.timepicker.open();
    fixture.detectChanges();
    tick();
    flush();

    const actions = document.querySelector(
      '.mat-timepicker-content .mat-timepicker-actions',
    );
    expect(actions).toBeTruthy();
    expect(actions?.querySelector('.cancel')).toBeTruthy();
    expect(actions?.querySelector('.apply')).toBeTruthy();
  }));

  it('should render the actions inside content panel in dialog mode', fakeAsync(() => {
    const fixture = createComponent(TimepickerWithActions);
    fixture.componentInstance.opensAs = 'dialog';
    fixture.detectChanges();
    fixture.componentInstance.timepicker.open();
    fixture.detectChanges();
    tick();
    flush();

    const actions = document.querySelector(
      '.mat-timepicker-content .mat-timepicker-actions',
    );
    expect(actions).toBeTruthy();
    expect(actions?.querySelector('.cancel')).toBeTruthy();
    expect(actions?.querySelector('.apply')).toBeTruthy();
  }));

  it('should not assign the value or close the timepicker when a value is selected', fakeAsync(() => {
    const fixture = createComponent(TimepickerWithActions);
    fixture.detectChanges();
    const { control, timepicker, onTimeChange, input } =
      fixture.componentInstance;
    timepicker.open();
    fixture.detectChanges();
    tick();

    const minutesDial = document.querySelector<HTMLElement>(
      '.mat-clock-dial-minutes',
    )!;
    const hourCell = getDialCell(6);

    expect(timepicker.opened).toBe(true);
    expect(minutesDial).toBeNull();
    expect(input.nativeElement.value).toBeFalsy();
    expect(control.value).toBeFalsy();
    expect(onTimeChange).not.toHaveBeenCalled();

    clickDialCell(hourCell);
    fixture.detectChanges();
    flush();

    expect(timepicker.opened).toBe(true);
    expect(input.nativeElement.value).toBeFalsy();
    expect(control.value).toBeFalsy();
    expect(onTimeChange).not.toHaveBeenCalled();
    expect(hourCell.classList).toContain('mat-primary');

    // TODO: check minute dial as well

    // const minuteCell = getDialCell(30);

    // expect(timepicker.opened).toBe(true);
    // expect(minutesDial).not.toBeNull();
    // expect(input.nativeElement.value).toBeFalsy();
    // expect(control.value).toBeFalsy();
    // expect(onTimeChange).not.toHaveBeenCalled();
    // expect(minuteCell.classList).not.toContain('mat-primary');
  }));

  it('should close without changing the value when clicking on the cancel button', fakeAsync(() => {
    const fixture = createComponent(TimepickerWithActions);
    fixture.detectChanges();
    const { control, timepicker, onTimeChange, input } =
      fixture.componentInstance;
    timepicker.open();
    fixture.detectChanges();
    tick();
    flush();

    const hoursDial = document.querySelector<HTMLElement>(
      '.mat-clock-dial-hours',
    )!;
    const minutesDial = document.querySelector<HTMLElement>(
      '.mat-clock-dial-minutes',
    )!;
    const hourCell = getDialCell(6);

    expect(timepicker.opened).toBe(true);
    expect(minutesDial).toBeNull();
    expect(input.nativeElement.value).toBeFalsy();
    expect(control.value).toBeFalsy();
    expect(onTimeChange).not.toHaveBeenCalled();

    clickDialCell(hourCell);
    fixture.detectChanges();
    tick();
    flush();

    expect(timepicker.opened).toBe(true);
    expect(input.nativeElement.value).toBeFalsy();
    expect(control.value).toBeFalsy();
    expect(onTimeChange).not.toHaveBeenCalled();
    expect(hourCell.classList).toContain('mat-primary');

    // TODO: select minutes

    document
      .querySelector('.mat-timepicker-content')!
      .querySelector<HTMLButtonElement>('.cancel')
      ?.click();
    fixture.detectChanges();
    flush();

    expect(timepicker.opened).toBe(false);
    expect(input.nativeElement.value).toBeFalsy();
    expect(control.value).toBeFalsy();
    expect(onTimeChange).not.toHaveBeenCalled();
  }));

  it('should close while keeping the previous control value when clicking on cancel', fakeAsync(() => {
    const fixture = createComponent(TimepickerWithActions);
    fixture.detectChanges();
    const { control, timepicker, onTimeChange } = fixture.componentInstance;
    const value = new Date(2021, 0, 20, 5, 11);
    control.setValue(value);
    fixture.detectChanges();
    timepicker.open();
    fixture.detectChanges();
    tick();
    flush();

    const hoursDial = document.querySelector<HTMLElement>(
      '.mat-clock-dial-hours',
    )!;
    const minutesDial = document.querySelector<HTMLElement>(
      '.mat-clock-dial-minutes',
    )!;
    const hourCell = getDialCell(6);

    expect(timepicker.opened).toBe(true);
    expect(control.value).toBe(value);
    expect(onTimeChange).not.toHaveBeenCalled();

    clickDialCell(hourCell);
    fixture.detectChanges();
    tick();
    flush();

    // TODO: select minutes

    expect(timepicker.opened).toBe(true);
    expect(control.value).toBe(value);
    expect(onTimeChange).not.toHaveBeenCalled();

    document
      .querySelector('.mat-timepicker-content')!
      .querySelector<HTMLButtonElement>('.cancel')
      ?.click();
    fixture.detectChanges();
    tick();
    flush();

    expect(timepicker.opened).toBe(false);
    expect(control.value).toBe(value);
    expect(onTimeChange).not.toHaveBeenCalled();
  }));

  xit('should close and accept the value when clicking on the apply button', fakeAsync(() => {
    const fixture = createComponent(TimepickerWithActions);
    fixture.detectChanges();
    const { control, timepicker, onTimeChange, input } =
      fixture.componentInstance;
    timepicker.open();
    fixture.detectChanges();
    tick();
    flush();

    const content = document.querySelector('.mat-timepicker-content')!;
    const hoursDial = document.querySelector<HTMLElement>(
      '.mat-clock-dial-hours',
    )!;
    const minutesDial = document.querySelector<HTMLElement>(
      '.mat-clock-dial-minutes',
    )!;
    const hourCell = getDialCell(6);

    expect(timepicker.opened).toBe(true);
    expect(input.nativeElement.value).toBeFalsy();
    expect(control.value).toBeFalsy();
    expect(onTimeChange).not.toHaveBeenCalled();
    expect(hourCell.classList).not.toContain('mat-primary');

    clickDialCell(hourCell);
    fixture.detectChanges();
    tick();
    flush();

    expect(timepicker.opened).toBe(true);
    expect(input.nativeElement.value).toBeFalsy();
    expect(control.value).toBeFalsy();
    expect(onTimeChange).not.toHaveBeenCalled();
    expect(hourCell.classList).toContain('mat-primary');

    // TODO: select minutes

    content.querySelector<HTMLButtonElement>('.apply')?.click();
    fixture.detectChanges();
    flush();

    expect(timepicker.opened).toBe(false);
    expect(input.nativeElement.value).toBeTruthy();
    expect(control.value).toBeTruthy();
    expect(onTimeChange).toHaveBeenCalledTimes(1);
  }));

  it('should be able to toggle the actions while the timepicker is open', fakeAsync(() => {
    const fixture = createComponent(TimepickerWithActions);
    fixture.componentInstance.renderActions = false;
    fixture.detectChanges();

    fixture.componentInstance.timepicker.open();
    fixture.detectChanges();
    tick();
    flush();

    const content = document.querySelector('.mat-timepicker-content')!;
    expect(content.querySelector('.cancel')).toBeFalsy();
    expect(content.querySelector('.apply')).toBeFalsy();

    fixture.componentInstance.renderActions = true;
    fixture.detectChanges();
    expect(content.querySelector('.cancel')).toBeTruthy();
    expect(content.querySelector('.apply')).toBeTruthy();
    flush();

    fixture.componentInstance.renderActions = false;
    fixture.detectChanges();
    expect(content.querySelector('.cancel')).toBeFalsy();
    expect(content.querySelector('.apply')).toBeFalsy();
  }));
});

@Component({
  template: `
    <mat-form-field>
      <input
        #input
        matInput
        [matTimepicker]="t"
        [formControl]="control"
        (timeChange)="onTimeChange()"
      />
      <mat-timepicker #t [openAs]="openAs">
        @if (renderActions) {
          <mat-timepicker-actions>
            <button class="cancel" mat-button matTimepickerCancel>
              Cancel
            </button>
            <button class="apply" mat-raised-button matTimepickerApply>
              Apply
            </button>
          </mat-timepicker-actions>
        }
      </mat-timepicker>
    </mat-form-field>
  `,
  standalone: false,
})
class TimepickerWithActions {
  @ViewChild(MatTimepicker) timepicker: MatTimepicker<Date>;
  @ViewChild('input', { read: ElementRef }) input: ElementRef<HTMLInputElement>;

  control = new UntypedFormControl(null);
  onTimeChange = jasmine.createSpy('timeChange spy');
  opensAs: TimepickerOpenAs = 'popup';
  renderActions = true;
}
