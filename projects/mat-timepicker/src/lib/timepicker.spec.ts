import {
  DOWN_ARROW,
  ESCAPE,
  LEFT_ARROW,
  PAGE_DOWN,
  PAGE_UP,
  RIGHT_ARROW,
  UP_ARROW,
} from '@angular/cdk/keycodes';
import { Overlay, ScrollDispatcher } from '@angular/cdk/overlay';
import { Component, Provider, Type, ViewChild } from '@angular/core';
import {
  ComponentFixture,
  fakeAsync,
  flush,
  TestBed,
  tick,
} from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Subject } from 'rxjs';

import { MatTimepickerModule } from './timepicker.module';
import { MatTimepicker } from './timepicker';
import { TimepickerOpenAs } from './timepicker-base';
import { MatTimepickerInput } from './timepicker-input';
import { MAT_TIMEPICKER_SCROLL_STRATEGY } from './timepicker-scroll-strategy';
import { MatNativeDateTimeModule } from './adapter';
import { By } from '@angular/platform-browser';
import { MatTimeSelectionModel } from './time-selection-model';
import { Directionality } from '@angular/cdk/bidi';

describe('MatTimepicker', () => {
  const SUPPORTS_INTL = typeof Intl != 'undefined';

  // Creates a test component fixture.
  function createComponent<T>(
    component: Type<T>,
    imports: Type<any>[] = [],
    providers: Provider[] = [],
    declarations: Type<any>[] = []
  ): ComponentFixture<T> {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MatTimepickerModule,
        MatFormFieldModule,
        MatInputModule,
        NoopAnimationsModule,
        ReactiveFormsModule,
        ...imports,
      ],
      providers,
      declarations: [component, ...declarations],
    });

    return TestBed.createComponent(component);
  }

  describe('with MatNativeDateModule', () => {
    describe('standard timepicker', () => {
      let fixture: ComponentFixture<StandardTimepicker>;
      let testComponent: StandardTimepicker;

      beforeEach(fakeAsync(() => {
        fixture = createComponent(StandardTimepicker, [
          MatNativeDateTimeModule,
        ]);
        fixture.detectChanges();

        testComponent = fixture.componentInstance;
      }));

      afterEach(fakeAsync(() => {
        testComponent.timepicker.close();
        fixture.detectChanges();
        flush();
      }));

      it('should initialize with correct value shown in input', () => {
        if (SUPPORTS_INTL) {
          expect(fixture.nativeElement.querySelector('input').value).toBe(
            '05:00 AM'
          );
        }
      });

      it('open timepicker should open popup', fakeAsync(() => {
        expect(
          document.querySelector('.cdk-overlay-pane.mat-timepicker-popup')
        ).toBeNull();

        testComponent.timepicker.open();
        fixture.detectChanges();
        tick();
        flush();

        expect(
          document.querySelector('.cdk-overlay-pane.mat-timepicker-popup')
        ).not.toBeNull();
      }));

      it('open timepicker as dialog', fakeAsync(() => {
        testComponent.openAs = 'dialog';
        fixture.detectChanges();

        expect(document.querySelector('.mat-timepicker-dialog')).toBeNull();

        testComponent.timepicker.open();
        fixture.detectChanges();
        tick();
        flush();

        expect(document.querySelector('.mat-timepicker-dialog')).not.toBeNull();
      }));

      it('should not be able to open more than one dialog', fakeAsync(() => {
        testComponent.openAs = 'dialog';
        fixture.detectChanges();

        expect(document.querySelectorAll('.mat-timpicker-dialog').length).toBe(
          0
        );

        testComponent.timepicker.open();
        fixture.detectChanges();
        tick(500);
        fixture.detectChanges();

        document
          .querySelector('.mat-timepicker-dialog')
          ?.dispatchEvent(new KeyboardEvent('keydown', { keyCode: ESCAPE }));
        fixture.detectChanges();
        tick(100);

        testComponent.timepicker.open();
        tick(500);
        fixture.detectChanges();
        flush();

        expect(document.querySelectorAll('.mat-timepicker-dialog').length).toBe(
          1
        );
      }));

      it('should open timepicker if opened input is set to true', fakeAsync(() => {
        testComponent.opened = true;
        fixture.detectChanges();
        tick();
        flush();

        expect(
          document.querySelector('.mat-timepicker-content')
        ).not.toBeNull();

        testComponent.opened = false;
        fixture.detectChanges();
        flush();

        expect(document.querySelector('.mat-timepicker-content')).toBeNull();
      }));

      it('open in disabled mode should not open the calendar', fakeAsync(() => {
        testComponent.disabled = true;
        fixture.detectChanges();

        expect(document.querySelector('.cdk-overlay-pane')).toBeNull();
        expect(document.querySelector('.mat-timepicker-popup')).toBeNull();

        testComponent.timepicker.open();
        tick();
        fixture.detectChanges();
        flush();

        expect(document.querySelector('.cdk-overlay-pane')).toBeNull();
        expect(document.querySelector('.mat-timepicker-popup')).toBeNull();
      }));

      it('disabled timepicker input should open the calendar if timepicker is enabled', fakeAsync(() => {
        testComponent.timepicker.disabled = false;
        testComponent.timepickerInput.disabled = true;
        fixture.detectChanges();

        expect(document.querySelector('.cdk-overlay-pane')).toBeNull();

        testComponent.timepicker.open();
        fixture.detectChanges();
        tick();
        flush();

        expect(document.querySelector('.cdk-overlay-pane')).not.toBeNull();
      }));

      it('close should close popup', fakeAsync(() => {
        testComponent.timepicker.open();
        fixture.detectChanges();
        tick();
        flush();

        const popup = document.querySelector('.cdk-overlay-pane')!;
        expect(popup).not.toBeNull();
        expect(popup.getBoundingClientRect().height).toBeGreaterThan(0);

        testComponent.timepicker.close();
        fixture.detectChanges();
        flush();

        expect(popup.getBoundingClientRect().height).toBe(0);
      }));

      it('should close the popup when pressing ESCAPE', fakeAsync(() => {
        testComponent.timepicker.open();
        fixture.detectChanges();
        tick();
        flush();

        expect(testComponent.timepicker.opened)
          .withContext('Expected timepicker to be open.')
          .toBe(true);

        const event = new KeyboardEvent('keydown', { keyCode: ESCAPE });
        document.body.dispatchEvent(event);
        fixture.detectChanges();
        flush();

        expect(testComponent.timepicker.opened)
          .withContext('Expected timepicker to be closed.')
          .toBe(false);
      }));

      it('should not close the popup when pressing ESCAPE with a modifier key', fakeAsync(() => {
        testComponent.timepicker.open();
        fixture.detectChanges();
        tick();

        expect(testComponent.timepicker.opened)
          .withContext('Expected timepicker to be open.')
          .toBe(true);

        const event = new KeyboardEvent('keydown', {
          keyCode: ESCAPE,
          altKey: true,
        });
        document.body.dispatchEvent(event);
        fixture.detectChanges();
        flush();

        expect(testComponent.timepicker.opened)
          .withContext('Expected timepicker to stay open.')
          .toBe(true);
        expect(event.defaultPrevented).toBe(false);
      }));

      xit('should set the proper role on the popup', fakeAsync(() => {
        testComponent.timepicker.open();
        fixture.detectChanges();
        tick();
        flush();

        const popup = document.querySelector(
          '.mat-timepicker-content-container'
        )!;
        expect(popup).toBeTruthy();
        expect(popup.getAttribute('role')).toBe('dialog');
      }));

      xit('should set aria-labelledby to the one from the input, if not placed inside a mat-form-field', fakeAsync(() => {
        expect(
          fixture.nativeElement.querySelector('mat-form-field')
        ).toBeFalsy();

        const input: HTMLInputElement =
          fixture.nativeElement.querySelector('input');
        input.setAttribute('aria-labelledby', 'test-label');

        testComponent.timepicker.open();
        fixture.detectChanges();
        tick();
        flush();

        const popup = document.querySelector(
          '.cdk-overlay-pane .mat-timepicker-content-container'
        )!;
        expect(popup).toBeTruthy();
        expect(popup.getAttribute('aria-labelledby')).toBe('test-label');
      }));

      it('close should close dialog', fakeAsync(() => {
        testComponent.openAs = 'dialog';
        fixture.detectChanges();

        testComponent.timepicker.open();
        fixture.detectChanges();
        tick();

        expect(document.querySelector('.mat-timepicker-dialog')).not.toBeNull();

        testComponent.timepicker.close();
        fixture.detectChanges();
        flush();

        expect(document.querySelector('.mat-timepicker-dialog')).toBeNull();
      }));

      xit('setting selected via click should update input and close timepicker', fakeAsync(() => {}));
      xit('setting selected via enter press should update input and close popup', fakeAsync(() => {}));
      xit('clicking the currently selected time should close the timepicker without firing selectedChanged', fakeAsync(() => {}));
      xit('pressing enter on the currently selected time should close the popup without firing selectedChanged', fakeAsync(() => {}));
      xit('input should aria-owns timepicker after opened in popup mode', fakeAsync(() => {}));
      xit('input should aria-owns timepicker after opened in dialog mode', fakeAsync(() => {}));

      it('should not throw when given wrong data type', () => {
        testComponent.date = '1/1/2017' as any;

        expect(() => fixture.detectChanges()).not.toThrow();
      });

      it('should clear out the backdrop subscriptions on close', fakeAsync(() => {
        for (let i = 0; i < 3; i++) {
          testComponent.timepicker.open();
          fixture.detectChanges();
          tick();

          testComponent.timepicker.close();
          fixture.detectChanges();
          tick();
        }

        testComponent.timepicker.open();
        fixture.detectChanges();
        tick();
        flush();

        const spy = jasmine.createSpy('close event spy');
        const subscription =
          testComponent.timepicker.closedStream.subscribe(spy);
        const backdrop = document.querySelector(
          '.cdk-overlay-backdrop'
        )! as HTMLElement;

        backdrop.click();
        fixture.detectChanges();
        flush();

        expect(spy).toHaveBeenCalledTimes(1);
        expect(testComponent.timepicker.opened).toBe(false);
        subscription.unsubscribe();
      }));

      it('should reset the timepicker when it is closed externally', fakeAsync(() => {
        TestBed.resetTestingModule();

        const scrolledSubject = new Subject();

        // Stub out a `CloseScrollStrategy` so we can trigger a detachment via the `OverlayRef`.
        fixture = createComponent(
          StandardTimepicker,
          [MatNativeDateTimeModule],
          [
            {
              provide: ScrollDispatcher,
              useValue: { scrolled: () => scrolledSubject },
            },
            {
              provide: MAT_TIMEPICKER_SCROLL_STRATEGY,
              deps: [Overlay],
              useFactory: (overlay: Overlay) => () =>
                overlay.scrollStrategies.close(),
            },
          ]
        );

        fixture.detectChanges();
        testComponent = fixture.componentInstance;

        testComponent.timepicker.open();
        fixture.detectChanges();
        tick();

        expect(testComponent.timepicker.opened).toBe(true);

        scrolledSubject.next(true);
        flush();
        fixture.detectChanges();

        expect(testComponent.timepicker.opened).toBe(false);
      }));

      xit('should not close the timepicker when using CTRL + SHIFT + ALT + UP_ARROW', fakeAsync(() => {
        testComponent.timepicker.open();
        fixture.detectChanges();
        tick();
        flush();

        expect(testComponent.timepicker.opened).toBe(true);

        const event = new KeyboardEvent('keydown', {
          keyCode: UP_ARROW,
          altKey: true,
          shiftKey: true,
          ctrlKey: true,
        });
        document.body.dispatchEvent(event);
        fixture.detectChanges();
        flush();

        expect(testComponent.timepicker.opened).toBe(true);
      }));

      xit('should open the timepicker using ALT + DOWN_ARROW', fakeAsync(() => {
        const input = fixture.nativeElement.querySelector('input');

        expect(testComponent.timepicker.opened).toBe(false);

        const event = new KeyboardEvent('keydown', {
          keyCode: DOWN_ARROW,
          altKey: true,
        });
        input.dispatchEvent(event);
        fixture.detectChanges();
        tick();
        flush();

        expect(testComponent.timepicker.opened).toBe(true);
        expect(event.defaultPrevented).toBe(true);
      }));

      it('should not open for ALT + DOWN_ARROW on readonly input', fakeAsync(() => {
        const input = fixture.nativeElement.querySelector('input');

        expect(testComponent.timepicker.opened).toBe(false);

        input.setAttribute('readonly', 'true');

        const event = new KeyboardEvent('keydown', {
          keyCode: DOWN_ARROW,
          altKey: true,
        });
        input.dispatchEvent(event);
        fixture.detectChanges();
        flush();

        expect(testComponent.timepicker.opened).toBe(false);
        expect(event.defaultPrevented).toBe(false);
      }));

      it('should not open the timepicker using SHIFT + CTRL + ALT + DOWN_ARROW', fakeAsync(() => {
        const input = fixture.nativeElement.querySelector('input');

        expect(testComponent.timepicker.opened).toBe(false);

        const event = new KeyboardEvent('keydown', {
          keyCode: DOWN_ARROW,
          altKey: true,
          shiftKey: true,
          ctrlKey: true,
        });
        input.dispatchEvent(event);
        fixture.detectChanges();
        tick();
        flush();

        expect(testComponent.timepicker.opened).toBe(false);
        expect(event.defaultPrevented).toBe(false);
      }));

      xit('should show the invisible close button on focus', fakeAsync(() => {
        testComponent.opened = true;
        fixture.detectChanges();
        tick();
        flush();

        const button = document.querySelector(
          '.mat-timepicker-close-button'
        ) as HTMLButtonElement;
        expect(button.classList).toContain('cdk-visually-hidden');

        const focusEvent = new Event('focus');
        button.dispatchEvent(focusEvent);
        fixture.detectChanges();
        expect(button.classList).not.toContain('cdk-visually-hidden');

        const blurEvent = new Event('blur');
        button.dispatchEvent(blurEvent);
        fixture.detectChanges();
        expect(button.classList).toContain('cdk-visually-hidden');
      }));

      xit('should close the overlay when clicking on the invisible close button', fakeAsync(() => {
        testComponent.opened = true;
        fixture.detectChanges();
        tick();
        flush();

        const button = document.querySelector(
          '.mat-timepicker-close-button'
        ) as HTMLButtonElement;
        expect(
          document.querySelector('.mat-timepicker-content')
        ).not.toBeNull();

        button.click();
        fixture.detectChanges();
        flush();

        expect(document.querySelector('.mat-timepicker-content')).toBeNull();
      }));

      xit('should prevent the default action of navigation keys before the focus timeout has elapsed', fakeAsync(() => {
        testComponent.timepicker.open();
        fixture.detectChanges();

        // Do the assertions before flushing the delays since we want
        // to check specifically what happens before they have fired.
        [
          UP_ARROW,
          DOWN_ARROW,
          LEFT_ARROW,
          RIGHT_ARROW,
          PAGE_UP,
          PAGE_DOWN,
        ].forEach((keyCode) => {
          const event = new KeyboardEvent('keydown', {
            keyCode,
          });
          fixture.detectChanges();
          expect(event.defaultPrevented)
            .withContext(
              `Expected default action to be prevented for key code ${keyCode}`
            )
            .toBe(true);
        });

        tick();
        flush();
      }));
    });

    describe('timepicker with too many inputs', () => {
      it('should throw when multiple inputs registered', fakeAsync(() => {
        const fixture = createComponent(MultiInputTimepicker, [
          MatNativeDateTimeModule,
        ]);
        expect(() => fixture.detectChanges()).toThrow();
      }));
    });

    describe('timepicker that is assigned to input at a later point', () => {
      it('should not throw on ALT + DOWN_ARROW for input without timepicker', fakeAsync(() => {
        const fixture = createComponent(DelayedTimepicker, [
          MatNativeDateTimeModule,
        ]);
        fixture.detectChanges();

        expect(() => {
          const event = new KeyboardEvent('keydown', {
            keyCode: DOWN_ARROW,
            altKey: true,
          });
          fixture.nativeElement.querySelector('input').dispatchEvent(event);
          fixture.detectChanges();
          flush();
        }).not.toThrow();
      }));

      xit('should handle value changes when a timepicker is assigned after init', fakeAsync(() => {
        const fixture = createComponent(DelayedTimepicker, [
          MatNativeDateTimeModule,
        ]);
        const testComponent: DelayedTimepicker = fixture.componentInstance;
        const toSelect = new Date(2021, 6, 6, 5);
        fixture.detectChanges();

        const model = fixture.debugElement
          .query(By.directive(MatTimepicker))
          .injector.get(MatTimeSelectionModel);

        expect(testComponent.timepickerInput.value).toBeNull();
        expect(model.selection).toBeNull();

        testComponent.assignedTimepicker = testComponent.timepicker;
        fixture.detectChanges();

        // testComponent.assignedTimepicker.select(toSelect);
        fixture.detectChanges();
        flush();
        fixture.detectChanges();

        expect(testComponent.timepickerInput.value).toEqual(toSelect);
        expect(model.selection).toEqual(toSelect);
      }));
    });

    describe('timepicker with no inputs', () => {
      let fixture: ComponentFixture<NoInputTimepicker>;
      let testComponent: NoInputTimepicker;

      beforeEach(fakeAsync(() => {
        fixture = createComponent(NoInputTimepicker, [MatNativeDateTimeModule]);
        fixture.detectChanges();

        testComponent = fixture.componentInstance;
      }));

      afterEach(fakeAsync(() => {
        testComponent.timepicker.close();
        fixture.detectChanges();
      }));

      it('should not throw when accessing disabled property', () => {
        expect(() => testComponent.timepicker.disabled).not.toThrow();
      });

      it('should throw when opened with no registered inputs', fakeAsync(() => {
        expect(() => testComponent.timepicker.open()).toThrow();
      }));
    });

    describe('timepicker inside mat-form-field', () => {
      let fixture: ComponentFixture<FormFieldDatepicker>;
      let testComponent: FormFieldDatepicker;

      beforeEach(fakeAsync(() => {
        fixture = createComponent(FormFieldDatepicker, [
          MatNativeDateTimeModule,
        ]);
        fixture.detectChanges();
        testComponent = fixture.componentInstance;
      }));

      afterEach(fakeAsync(() => {
        testComponent.timepicker.close();
        fixture.detectChanges();
        flush();
      }));

      it('should float the placeholder when an invalid value is entered', () => {
        testComponent.timepickerInput.value = 'totally-not-a-date' as any;
        fixture.debugElement.nativeElement.querySelector('input').value =
          'totally-not-a-date';
        fixture.detectChanges();

        expect(
          fixture.debugElement.nativeElement.querySelector('mat-form-field')
            .classList
        ).toContain('mat-form-field-should-float');
      });

      it('should pass the form field theme color to the overlay', fakeAsync(() => {
        testComponent.formField.color = 'primary';
        testComponent.timepicker.open();
        fixture.detectChanges();
        tick();
        flush();

        let contentEl = document.querySelector('.mat-timepicker-content')!;

        expect(contentEl.classList).toContain('mat-primary');

        testComponent.timepicker.close();
        fixture.detectChanges();
        flush();

        testComponent.formField.color = 'warn';
        testComponent.timepicker.open();

        contentEl = document.querySelector('.mat-timepicker-content')!;
        fixture.detectChanges();
        tick();
        flush();

        expect(contentEl.classList).toContain('mat-warn');
        expect(contentEl.classList).not.toContain('mat-primary');
      }));

      it('should prefer the timepicker color over the form field one', fakeAsync(() => {
        testComponent.timepicker.color = 'accent';
        testComponent.formField.color = 'warn';
        testComponent.timepicker.open();
        fixture.detectChanges();
        tick();
        flush();

        const contentEl = document.querySelector('.mat-timepicker-content')!;

        expect(contentEl.classList).toContain('mat-accent');
        expect(contentEl.classList).not.toContain('mat-warn');
      }));

      xit('should set aria-labelledby of the overlay to the form field label', fakeAsync(() => {
        const label: HTMLElement = fixture.nativeElement.querySelector('label');

        expect(label).toBeTruthy();
        expect(label.getAttribute('id')).toBeTruthy();

        testComponent.timepicker.open();
        fixture.detectChanges();
        tick();
        flush();

        const popup = document.querySelector(
          '.cdk-overlay-pane .mat-timepicker-content-container'
        )!;
        expect(popup).toBeTruthy();
        expect(popup.getAttribute('aria-labelledby')).toBe(
          label.getAttribute('id')
        );
      }));
    });

    xdescribe('timepicker with min and max dates and validation', () => {});

    xdescribe('datepicker with filter and validation', () => {});

    describe('timeepicker with change and input events', () => {
      let fixture: ComponentFixture<TimepickerWithChangeAndInputEvents>;
      let testComponent: TimepickerWithChangeAndInputEvents;
      let inputEl: HTMLInputElement;

      beforeEach(fakeAsync(() => {
        fixture = createComponent(TimepickerWithChangeAndInputEvents, [
          MatNativeDateTimeModule,
        ]);
        fixture.detectChanges();

        testComponent = fixture.componentInstance;
        inputEl = fixture.debugElement.query(By.css('input'))!.nativeElement;

        spyOn(testComponent, 'onChange');
        spyOn(testComponent, 'onInput');
        spyOn(testComponent, 'onTimeChange');
        spyOn(testComponent, 'onTimeInput');
      }));

      afterEach(fakeAsync(() => {
        testComponent.timepicker.close();
        fixture.detectChanges();
      }));

      it('should fire input and timeInput events when user types input', () => {
        expect(testComponent.onChange).not.toHaveBeenCalled();
        expect(testComponent.onTimeChange).not.toHaveBeenCalled();
        expect(testComponent.onInput).not.toHaveBeenCalled();
        expect(testComponent.onTimeInput).not.toHaveBeenCalled();

        inputEl.value = '11:12';
        const event = new Event('input');
        inputEl.dispatchEvent(event);
        fixture.detectChanges();

        expect(testComponent.onChange).not.toHaveBeenCalled();
        expect(testComponent.onTimeChange).not.toHaveBeenCalled();
        expect(testComponent.onInput).toHaveBeenCalled();
        expect(testComponent.onTimeInput).toHaveBeenCalled();
      });

      it('should fire change and timeChange events when user commits typed input', () => {
        expect(testComponent.onChange).not.toHaveBeenCalled();
        expect(testComponent.onTimeChange).not.toHaveBeenCalled();
        expect(testComponent.onInput).not.toHaveBeenCalled();
        expect(testComponent.onTimeInput).not.toHaveBeenCalled();

        const event = new Event('change');
        inputEl.dispatchEvent(event);
        fixture.detectChanges();

        expect(testComponent.onChange).toHaveBeenCalled();
        expect(testComponent.onTimeChange).toHaveBeenCalled();
        expect(testComponent.onInput).not.toHaveBeenCalled();
        expect(testComponent.onTimeInput).not.toHaveBeenCalled();
      });

      xit('should fire timeChange and timeInput events when user selects time using dial', fakeAsync(() => {
        expect(testComponent.onChange).not.toHaveBeenCalled();
        expect(testComponent.onTimeChange).not.toHaveBeenCalled();
        expect(testComponent.onInput).not.toHaveBeenCalled();
        expect(testComponent.onTimeInput).not.toHaveBeenCalled();

        testComponent.timepicker.open();
        fixture.detectChanges();
        tick();

        expect(document.querySelector('.mat-timepicker-dialog')).not.toBeNull();

        // select time from dial
        fixture.detectChanges();
        flush();

        expect(testComponent.onChange).not.toHaveBeenCalled();
        expect(testComponent.onTimeChange).toHaveBeenCalled();
        expect(testComponent.onInput).not.toHaveBeenCalled();
        expect(testComponent.onTimeInput).toHaveBeenCalled();
      }));

      xit('should fire timeChange and timeInput events when user selects time using inputs', fakeAsync(() => {
        expect(testComponent.onChange).not.toHaveBeenCalled();
        expect(testComponent.onTimeChange).not.toHaveBeenCalled();
        expect(testComponent.onInput).not.toHaveBeenCalled();
        expect(testComponent.onTimeInput).not.toHaveBeenCalled();

        testComponent.timepicker.open();
        fixture.detectChanges();
        tick();

        expect(document.querySelector('.mat-timepicker-dialog')).not.toBeNull();

        // select time from inputs
        fixture.detectChanges();
        flush();

        expect(testComponent.onChange).not.toHaveBeenCalled();
        expect(testComponent.onTimeChange).toHaveBeenCalled();
        expect(testComponent.onInput).not.toHaveBeenCalled();
        expect(testComponent.onTimeInput).toHaveBeenCalled();
      }));

      it('should not fire the timeInput event if the value has not changed', () => {
        expect(testComponent.onTimeInput).not.toHaveBeenCalled();

        inputEl.value = '10:29';
        const event = new Event('input');
        inputEl.dispatchEvent(event);
        fixture.detectChanges();

        expect(testComponent.onTimeInput).toHaveBeenCalledTimes(1);

        inputEl.dispatchEvent(event);
        fixture.detectChanges();

        expect(testComponent.onTimeInput).toHaveBeenCalledTimes(1);
      });

      it('should have updated the native input value when the timeChange event is emitted', () => {
        let valueDuringChangeEvent = '';

        (testComponent.onTimeChange as jasmine.Spy).and.callFake(() => {
          valueDuringChangeEvent = inputEl.value;
        });

        const model = fixture.debugElement
          .query(By.directive(MatTimepicker))
          .injector.get<MatTimeSelectionModel<Date>>(MatTimeSelectionModel);

        model.updateSelection(new Date(2020, 0, 1, 22, 23), null);
        fixture.detectChanges();

        expect(valueDuringChangeEvent).toBe('10:23 PM');
      });

      it('should not fire timeInput when typing an invalid value', () => {
        expect(testComponent.onTimeInput).not.toHaveBeenCalled();

        inputEl.value = 'a';
        const event = new Event('input');
        inputEl.dispatchEvent(event);
        fixture.detectChanges();
        expect(testComponent.onTimeInput).not.toHaveBeenCalled();

        inputEl.value = 'b';
        inputEl.dispatchEvent(event);
        fixture.detectChanges();
        expect(testComponent.onTimeInput).not.toHaveBeenCalled();
      });
    });

    describe('with ISO 8601 strings as input', () => {
      let fixture: ComponentFixture<DatepickerWithISOStrings>;
      let testComponent: DatepickerWithISOStrings;

      beforeEach(fakeAsync(() => {
        fixture = createComponent(DatepickerWithISOStrings, [
          MatNativeDateTimeModule,
        ]);
        testComponent = fixture.componentInstance;
      }));

      afterEach(fakeAsync(() => {
        testComponent.timepicker.close();
        fixture.detectChanges();
      }));

      it('should coerce ISO strings', fakeAsync(() => {
        expect(() => fixture.detectChanges()).not.toThrow();
        flush();
        fixture.detectChanges();

        expect(testComponent.timepickerInput.value).toEqual(
          new Date(2017, 5, 1, 9, 13)
        );
        // expect(testComponent.timepickerInput.min).toEqual(new Date(2017, 0, 1));
        // expect(testComponent.timepickerInput.max).toEqual(new Date(2017, 11, 31));
      }));
    });

    xdescribe('with events', () => {
      let fixture: ComponentFixture<TimepickerWithEvents>;
      let testComponent: TimepickerWithEvents;

      beforeEach(fakeAsync(() => {
        fixture = createComponent(TimepickerWithEvents, [
          MatNativeDateTimeModule,
        ]);
        fixture.detectChanges();
        testComponent = fixture.componentInstance;
      }));

      it('should dispatch an event when a timepicker is opened', fakeAsync(() => {
        testComponent.timepicker.open();
        fixture.detectChanges();
        tick();

        expect(testComponent.openedSpy).toHaveBeenCalled();
      }));

      it('should dispatch an event when a timepicker is closed', fakeAsync(() => {
        testComponent.timepicker.open();
        fixture.detectChanges();
        tick();

        testComponent.timepicker.close();
        flush();
        fixture.detectChanges();

        expect(testComponent.closedSpy).toHaveBeenCalled();
      }));
    });

    describe('timepicker that opens on focus', () => {
      let fixture: ComponentFixture<TimepickerOpeningOnFocus>;
      let testComponent: TimepickerOpeningOnFocus;
      let input: HTMLInputElement;

      beforeEach(fakeAsync(() => {
        fixture = createComponent(TimepickerOpeningOnFocus, [
          MatNativeDateTimeModule,
        ]);
        fixture.detectChanges();
        testComponent = fixture.componentInstance;
        input = fixture.debugElement.query(By.css('input'))!.nativeElement;
      }));

      xit('should not reopen if the browser fires the focus event asynchronously', fakeAsync(() => {
        // Stub out the real focus method so we can call it reliably.
        const event = new Event('focus');
        spyOn(input, 'focus').and.callFake(() => {
          // Dispatch the event handler async to simulate the IE11 behavior.
          Promise.resolve().then(() => input.dispatchEvent(event));
        });

        // Open initially by focusing.
        input.focus();
        fixture.detectChanges();
        tick();
        flush();

        // Due to some browser limitations we can't install a stub on `document.activeElement`
        // so instead we have to override the previously-focused element manually.
        (
          fixture.componentInstance.timepicker as any
        )._focusedElementBeforeOpen = input;

        // Ensure that the timepicker is actually open.
        expect(testComponent.timepicker.opened)
          .withContext('Expected timepicker to be open')
          .toBe(true);

        // Close the timepicker.
        testComponent.timepicker.close();
        fixture.detectChanges();

        // Schedule the input to be focused asynchronously.
        input.focus();
        fixture.detectChanges();
        tick();

        // Flush out the scheduled tasks.
        flush();

        expect(testComponent.timepicker.opened)
          .withContext('Expected timepicker to be closed')
          .toBe(false);
      }));
    });

    xdescribe('timepicker directionality', () => {
      it('should pass along the directionality to the popup', fakeAsync(() => {
        const fixture = createComponent(
          StandardTimepicker,
          [MatNativeDateTimeModule],
          [
            {
              provide: Directionality,
              useValue: { value: 'rtl' },
            },
          ]
        );

        fixture.detectChanges();
        fixture.componentInstance.timepicker.open();
        fixture.detectChanges();
        tick();

        const overlay = document.querySelector(
          '.cdk-overlay-connected-position-bounding-box'
        )!;

        expect(overlay.getAttribute('dir')).toBe('rtl');
      }));

      it('should update the popup direction if the directionality value changes', fakeAsync(() => {
        const dirProvider = { value: 'ltr' };
        const fixture = createComponent(
          StandardTimepicker,
          [MatNativeDateTimeModule],
          [
            {
              provide: Directionality,
              useFactory: () => dirProvider,
            },
          ]
        );

        fixture.detectChanges();
        fixture.componentInstance.timepicker.open();
        fixture.detectChanges();
        tick();

        let overlay = document.querySelector(
          '.cdk-overlay-connected-position-bounding-box'
        )!;

        expect(overlay.getAttribute('dir')).toBe('ltr');

        fixture.componentInstance.timepicker.close();
        fixture.detectChanges();
        flush();

        dirProvider.value = 'rtl';
        fixture.componentInstance.timepicker.open();
        fixture.detectChanges();
        tick();

        overlay = document.querySelector(
          '.cdk-overlay-connected-position-bounding-box'
        )!;

        expect(overlay.getAttribute('dir')).toBe('rtl');
      }));

      it('should pass along the directionality to the dialog in touch mode', fakeAsync(() => {
        const fixture = createComponent(
          StandardTimepicker,
          [MatNativeDateTimeModule],
          [
            {
              provide: Directionality,
              useValue: { value: 'rtl' },
            },
          ]
        );

        fixture.componentInstance.openAs = 'dialog';
        fixture.detectChanges();
        fixture.componentInstance.timepicker.open();
        fixture.detectChanges();
        tick();

        const overlay = document.querySelector('.cdk-global-overlay-wrapper')!;

        expect(overlay.getAttribute('dir')).toBe('rtl');
      }));
    });
  });
});

@Component({
  template: `
    <input [matTimepicker]="t" [value]="date" />
    <mat-timepicker
      #t
      [openAs]="openAs"
      [opened]="opened"
      [disabled]="disabled"
    ></mat-timepicker>
  `,
})
class StandardTimepicker {
  openAs: TimepickerOpenAs = 'popup';
  opened = false;
  disabled = false;
  date = new Date(2021, 6, 6, 5);
  @ViewChild('t') timepicker: MatTimepicker<Date>;
  @ViewChild(MatTimepickerInput) timepickerInput: MatTimepickerInput<Date>;
}

@Component({
  template: `
    <input [matTimepicker]="t" />
    <input [matTimepicker]="t" />
    <mat-timepicker #t></mat-timepicker>
  `,
})
class MultiInputTimepicker {}

@Component({
  template: `
    <input [matTimepicker]="assignedTimepicker" [value]="date" />
    <mat-timepicker #t openAs="dialog"></mat-timepicker>
  `,
})
class DelayedTimepicker {
  @ViewChild('t') timepicker: MatTimepicker<Date>;
  @ViewChild(MatTimepickerInput) timepickerInput: MatTimepickerInput<Date>;
  date: Date | null;
  assignedTimepicker: MatTimepicker<Date>;
}

@Component({
  template: `<mat-timepicker #t></mat-timepicker>`,
})
class NoInputTimepicker {
  @ViewChild('t') timepicker: MatTimepicker<Date>;
}

@Component({
  template: `
    <mat-form-field>
      <mat-label>Pick time</mat-label>
      <input matInput [matTimepicker]="t" />
      <mat-timepicker #t></mat-timepicker>
    </mat-form-field>
  `,
})
class FormFieldDatepicker {
  @ViewChild('t') timepicker: MatTimepicker<Date>;
  @ViewChild(MatTimepickerInput) timepickerInput: MatTimepickerInput<Date>;
  @ViewChild(MatFormField) formField: MatFormField;
}

@Component({
  template: `
    <input
      [matTimepicker]="t"
      (change)="onChange()"
      (input)="onInput()"
      (timeChange)="onTimeChange()"
      (timeInput)="onTimeInput()"
    />
    <mat-timepicker #t openAs="dialog"></mat-timepicker>
  `,
})
class TimepickerWithChangeAndInputEvents {
  @ViewChild('t') timepicker: MatTimepicker<Date>;

  onChange() {}

  onInput() {}

  onTimeChange() {}

  onTimeInput() {}
}

@Component({
  template: `
    <input [matTimepicker]="t" [(ngModel)]="value" [min]="min" [max]="max" />
    <mat-timepicker #t></mat-timepicker>
  `,
})
class DatepickerWithISOStrings {
  value = new Date(2017, 5, 1, 9, 13).toISOString();
  min = new Date(2017, 0, 1).toISOString();
  max = new Date(2017, 11, 31).toISOString();
  @ViewChild('t') timepicker: MatTimepicker<Date>;
  @ViewChild(MatTimepickerInput) timepickerInput: MatTimepickerInput<Date>;
}

@Component({
  template: `
    <input [(ngModel)]="selected" [matTimepicker]="t" />
    <mat-timepicker
      (opened)="openedSpy()"
      (closed)="closedSpy()"
      #t
    ></mat-timepicker>
  `,
})
class TimepickerWithEvents {
  selected: Date | null = null;
  openedSpy = jasmine.createSpy('opened spy');
  closedSpy = jasmine.createSpy('closed spy');
  @ViewChild('t') timepicker: MatTimepicker<Date>;
}

@Component({
  template: `
    <input (focus)="t.open()" [matTimepicker]="t" />
    <mat-timepicker #t="matTimepicker"></mat-timepicker>
  `,
})
class TimepickerOpeningOnFocus {
  @ViewChild(MatTimepicker) timepicker: MatTimepicker<Date>;
}
