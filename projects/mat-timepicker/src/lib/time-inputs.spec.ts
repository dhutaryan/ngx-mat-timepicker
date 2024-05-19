import { Component, QueryList, Type, ViewChildren } from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  flush,
  tick,
  waitForAsync,
} from '@angular/core/testing';
import { DOWN_ARROW, UP_ARROW } from '@angular/cdk/keycodes';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatTimepickerModule } from './timepicker.module';
import { MatNativeDateTimeModule } from './adapter';
import { MatHourInput, MatMinuteInput } from './time-inputs';

function createComponent<T>(component: Type<T>): ComponentFixture<T> {
  TestBed.configureTestingModule({
    imports: [MatTimepickerModule, MatNativeDateTimeModule, NoopAnimationsModule],
    declarations: [component],
  });

  return TestBed.createComponent<T>(component);
}

describe('MatInputs', () => {
  describe('with 24h format', () => {
    let fixture: ComponentFixture<StandardTimeInputs>;
    let testComponent: StandardTimeInputs;
    let hostElement: HTMLElement;
    let hourInput: HTMLInputElement;
    let minuteInput: HTMLInputElement;

    beforeEach(waitForAsync(() => {
      fixture = createComponent(StandardTimeInputs);
      fixture.detectChanges();
      testComponent = fixture.componentInstance;
      hostElement = fixture.nativeElement;
      const timeInputElements = hostElement.querySelectorAll<HTMLInputElement>('.mat-time-input');
      hourInput = timeInputElements[0];
      minuteInput = timeInputElements[1];

      spyOn(testComponent, 'onSelect');
    }));

    it('should render default time inputs', () => {
      const container = fixture.debugElement.query(By.css('.mat-time-inputs'));

      expect(container).not.toBeNull();
      expect(container.query(By.css('.mat-timepicker-content-layout-hours'))).not.toBeNull();
      expect(container.query(By.css('.mat-timepicker-content-layout-minutes'))).not.toBeNull();
      expect(container.queryAll(By.css('.mat-time-inputs-field')).length).toBe(2);
    });

    it('should set default values as now', () => {
      expect(Number(hourInput.value)).toBe(new Date().getHours());
      expect(Number(minuteInput.value)).toBe(new Date().getMinutes());
      expect(testComponent.onSelect).not.toHaveBeenCalled();
    });

    it('should call _userSelection when period has changed', () => {
      testComponent.isMeridiem = true;
      testComponent.selected = new Date(2023, 4, 8, 23, 16);
      fixture.detectChanges();
      expect(testComponent.onSelect).not.toHaveBeenCalled();

      const amElement = document.querySelectorAll<HTMLElement>('.mat-time-period-item')[0];
      amElement.click();

      expect(testComponent.onSelect).toHaveBeenCalledOnceWith(new Date(2023, 4, 8, 11, 16));
    });

    it('should set selected value', () => {
      testComponent.selected = new Date(2023, 4, 19, 21, 45);
      fixture.detectChanges();

      expect(Number(hourInput.value)).toBe(21);
      expect(Number(minuteInput.value)).toBe(45);
      expect(testComponent.onSelect).not.toHaveBeenCalled();
    });

    it('should set correct hour value if meridiem is true', () => {
      testComponent.selected = new Date(2023, 4, 19, 21, 45);
      testComponent.isMeridiem = true;
      fixture.detectChanges();

      expect(Number(hourInput.value)).toBe(9);
      expect(Number(minuteInput.value)).toBe(45);
      expect(testComponent.onSelect).not.toHaveBeenCalled();
    });

    it('should set correct hour value if meridiem is true', () => {
      testComponent.selected = new Date(2023, 4, 19, 21, 45);
      testComponent.isMeridiem = true;
      fixture.detectChanges();

      expect(Number(hourInput.value)).toBe(9);
      expect(Number(minuteInput.value)).toBe(45);
      expect(testComponent.onSelect).not.toHaveBeenCalled();
    });

    it('should set placeholder as previous value after focus', fakeAsync(() => {
      testComponent.selected = new Date(2023, 4, 19, 19, 45);
      fixture.detectChanges();
      tick();
      flush();

      expect(Number(hourInput.value)).toBe(19);
      expect(Number(minuteInput.value)).toBe(45);

      dispatchInputEvent(hourInput, 'focus');
      dispatchInputEvent(minuteInput, 'focus');

      expect(Number(hourInput.value)).toBe(0);
      expect(Number(minuteInput.value)).toBe(0);
      expect(hourInput.placeholder).toBe('19');
      expect(minuteInput.placeholder).toBe('45');
    }));

    it('should keep the same value after focus and blur inputs', fakeAsync(() => {
      testComponent.selected = new Date(2023, 4, 19, 21, 45);
      fixture.detectChanges();
      tick();
      flush();

      expect(Number(hourInput.value)).toBe(21);
      expect(Number(minuteInput.value)).toBe(45);

      dispatchInputEvent(hourInput, 'focus');
      dispatchInputEvent(minuteInput, 'focus');

      expect(Number(hourInput.value)).toBe(0);
      expect(Number(minuteInput.value)).toBe(0);
      expect(hourInput.placeholder).toBe('21');
      expect(minuteInput.placeholder).toBe('45');

      dispatchInputEvent(hourInput, 'blur');
      dispatchInputEvent(minuteInput, 'blur');

      expect(Number(hourInput.value)).toBe(21);
      expect(Number(minuteInput.value)).toBe(45);
      expect(hourInput.placeholder).toBe('21');
      expect(minuteInput.placeholder).toBe('45');
      expect(testComponent.onSelect).toHaveBeenCalledTimes(2);
    }));

    it('should emit time change event when value has been changed', () => {
      testComponent.selected = new Date(2023, 4, 19, 21, 45);
      fixture.detectChanges();

      dispatchInputEvent(hourInput, 'focus');
      hourInput.value = '14';
      fixture.detectChanges();
      dispatchInputEvent(hourInput, 'blur');

      expect(testComponent.onSelect).toHaveBeenCalledOnceWith(new Date(2023, 4, 19, 14, 45));

      dispatchInputEvent(minuteInput, 'focus');
      minuteInput.value = '32';
      fixture.detectChanges();
      dispatchInputEvent(minuteInput, 'blur');

      expect(testComponent.onSelect).toHaveBeenCalledWith(new Date(2023, 4, 19, 21, 32));
    });

    it('should keep hour as 0 if no meridiem', () => {
      testComponent.selected = new Date(2023, 4, 19, 0, 45);
      fixture.detectChanges();

      expect(Number(hourInput.value)).toBe(0);
    });

    it('should change hour to 12 if meridiem is true and selected hour is 0', () => {
      testComponent.selected = new Date(2023, 4, 19, 0, 45);
      testComponent.isMeridiem = true;
      fixture.detectChanges();

      expect(Number(hourInput.value)).toBe(12);
      expect(testComponent.onSelect).not.toHaveBeenCalled();
    });

    it('should show hour as correct value if meridiem is true', () => {
      testComponent.selected = new Date(2023, 4, 19, 15, 45);
      testComponent.isMeridiem = true;
      fixture.detectChanges();

      expect(Number(hourInput.value)).toBe(3);
      expect(testComponent.onSelect).not.toHaveBeenCalled();
    });

    it('should change hour to 0 if consumer enter hour as 24 and no meridiem', () => {
      hourInput.value = '24';
      fixture.detectChanges();
      dispatchInputEvent(hourInput, 'blur');

      expect(Number(hourInput.value)).toBe(0);
    });

    it('should change hour to correct value if consumer enter hour more than 12 and meridiem is true', () => {
      testComponent.isMeridiem = true;
      hourInput.value = '17';
      fixture.detectChanges();
      dispatchInputEvent(hourInput, 'blur');

      expect(Number(hourInput.value)).toBe(5);
    });

    it('should change hour and minutes if consumer enter more than allowed', () => {
      hourInput.value = '27';
      fixture.detectChanges();
      dispatchInputEvent(hourInput, 'blur');

      expect(Number(hourInput.value)).toBe(23);

      minuteInput.value = '84';
      fixture.detectChanges();
      dispatchInputEvent(minuteInput, 'blur');

      expect(Number(minuteInput.value)).toBe(59);
    });

    it('should show time with zero prefix if value less than 10', () => {
      testComponent.selected = new Date(2023, 4, 19, 7, 2);
      fixture.detectChanges();

      expect(hourInput.value).toBe('07');
      expect(minuteInput.value).toBe('02');
    });

    it('should have intl strings', () => {
      expect(hostElement.querySelector('.mat-timepicker-content-layout-title')?.textContent).toBe(
        'Enter time',
      );
      expect(
        hostElement.querySelector('.mat-timepicker-content-layout-hours .mat-mdc-form-field-hint')
          ?.textContent,
      ).toBe('Hour');
      expect(
        hostElement.querySelector('.mat-timepicker-content-layout-minutes .mat-mdc-form-field-hint')
          ?.textContent,
      ).toBe('Minute');
    });

    it('should change minutes if interval has set', () => {
      testComponent.minuteInterval = 15;
      minuteInput.value = '35';
      fixture.detectChanges();
      dispatchInputEvent(minuteInput, 'blur');

      expect(Number(minuteInput.value)).toBe(30);
    });

    it('should change hours using arrows', () => {
      testComponent.selected = new Date(2023, 4, 27, 22, 20);
      fixture.detectChanges();

      expect(Number(hourInput.value)).toBe(22);
      expect(Number(minuteInput.value)).toBe(20);

      dispatchKeyEvent(hourInput, DOWN_ARROW);
      fixture.detectChanges();

      expect(Number(hourInput.value)).toBe(21);
      expect(Number(minuteInput.value)).toBe(20);

      dispatchKeyEvent(hourInput, UP_ARROW);
      fixture.detectChanges();

      expect(Number(hourInput.value)).toBe(22);
      expect(Number(minuteInput.value)).toBe(20);
    });

    it('should change minutes using arrows', () => {
      testComponent.selected = new Date(2023, 4, 27, 22, 20);
      fixture.detectChanges();

      expect(Number(minuteInput.value)).toBe(20);
      expect(Number(hourInput.value)).toBe(22);

      dispatchKeyEvent(minuteInput, DOWN_ARROW);
      fixture.detectChanges();

      expect(Number(minuteInput.value)).toBe(19);
      expect(Number(hourInput.value)).toBe(22);

      dispatchKeyEvent(minuteInput, UP_ARROW);
      fixture.detectChanges();

      expect(Number(minuteInput.value)).toBe(20);
      expect(Number(hourInput.value)).toBe(22);
    });

    it('should keep the same value if consumer entered a string', () => {
      testComponent.selected = new Date(2023, 4, 27, 22, 20);
      fixture.detectChanges();

      expect(Number(hourInput.value)).toBe(22);
      expect(Number(minuteInput.value)).toBe(20);

      hourInput.value = 'value';
      dispatchInputEvent(hourInput, 'blur');
      fixture.detectChanges();

      expect(Number(hourInput.value)).toBe(22);
      expect(Number(minuteInput.value)).toBe(20);

      minuteInput.value = 'value';
      dispatchInputEvent(minuteInput, 'blur');
      fixture.detectChanges();

      expect(Number(hourInput.value)).toBe(22);
      expect(Number(minuteInput.value)).toBe(20);
    });

    it('should prevent to enter any symbols except numbers', () => {
      const date = new Date();
      dispatchKeyEvent(hourInput, 17);

      expect(Number(hourInput.value)).toBe(date.getHours());

      dispatchKeyEvent(minuteInput, 18);

      expect(Number(minuteInput.value)).toBe(date.getMinutes());
    });
  });

  describe('with meridiem', () => {
    let fixture: ComponentFixture<TimeInputsWithMeridiem>;
    let testComponent: TimeInputsWithMeridiem;
    let hostElement: HTMLElement;
    let hourInput: HTMLInputElement;
    let minuteInput: HTMLInputElement;

    beforeEach(waitForAsync(() => {
      fixture = createComponent(TimeInputsWithMeridiem);
      fixture.detectChanges();
      testComponent = fixture.componentInstance;
      hostElement = fixture.nativeElement;
      const timeInputElements = hostElement.querySelectorAll<HTMLInputElement>('.mat-time-input');
      hourInput = timeInputElements[0];
      minuteInput = timeInputElements[1];

      spyOn(testComponent, 'onSelect');
    }));

    it('should change hour to 12 if consumer enter hour as 0 and meridiem is true', () => {
      hourInput.value = '0';
      fixture.detectChanges();
      dispatchInputEvent(hourInput, 'blur');

      expect(Number(hourInput.value)).toBe(12);
    });

    it('should change hour to 12 if consumer enter hour as 24 and meridiem is true', () => {
      hourInput.value = '24';
      fixture.detectChanges();
      dispatchInputEvent(hourInput, 'blur');

      expect(Number(hourInput.value)).toBe(12);
    });

    it('should change hour and minutes if consumer enter more than allowed', () => {
      hourInput.value = '35';
      fixture.detectChanges();
      dispatchInputEvent(hourInput, 'blur');

      expect(Number(hourInput.value)).toBe(12);
    });
  });

  describe('with min/max', () => {
    let fixture: ComponentFixture<WithMinMaxTimeInputs>;
    let testComponent: WithMinMaxTimeInputs;
    let hostElement: HTMLElement;
    let hourInput: HTMLInputElement;
    let minuteInput: HTMLInputElement;

    beforeEach(waitForAsync(() => {
      fixture = createComponent(WithMinMaxTimeInputs);
      fixture.detectChanges();
      testComponent = fixture.componentInstance;
      hostElement = fixture.nativeElement;
      const timeInputElements = hostElement.querySelectorAll<HTMLInputElement>('.mat-time-input');
      hourInput = timeInputElements[0];
      minuteInput = timeInputElements[1];

      spyOn(testComponent, 'onSelect');
    }));

    it("should show selected time if it's less than min time", () => {
      testComponent.selected = new Date(2023, 4, 18, 1, 25);
      testComponent.minTime = new Date(2023, 4, 18, 4, 15);
      fixture.detectChanges();

      expect(hourInput.value).toBe('01');
      expect(minuteInput.value).toBe('25');
    });

    it("should show selected time if it's more than max time", () => {
      testComponent.selected = new Date(2023, 4, 18, 10, 30);
      testComponent.maxTime = new Date(2023, 4, 18, 9, 15);
      fixture.detectChanges();

      expect(hourInput.value).toBe('10');
      expect(minuteInput.value).toBe('30');
    });

    it('should change hour to min if consumer entered value less', () => {
      testComponent.selected = new Date(2023, 4, 18, 10, 30);
      testComponent.minTime = new Date(2023, 4, 18, 6, 20);
      fixture.detectChanges();

      hourInput.value = '4';
      dispatchInputEvent(hourInput, 'blur');
      fixture.detectChanges();

      expect(hourInput.value).toBe('06');
    });

    it('should change hour to max if consumer entered value more', () => {
      testComponent.selected = new Date(2023, 4, 18, 10, 30);
      testComponent.maxTime = new Date(2023, 4, 18, 16, 20);
      fixture.detectChanges();

      hourInput.value = '19';
      dispatchInputEvent(hourInput, 'blur');
      fixture.detectChanges();

      expect(hourInput.value).toBe('16');
    });

    it('should change minutes to min which are less than minMinute if hour is equal min hour', () => {
      testComponent.selected = new Date(2023, 4, 18, 10, 30);
      testComponent.minTime = new Date(2023, 4, 18, 10, 20);
      fixture.detectChanges();

      minuteInput.value = '10';
      dispatchInputEvent(minuteInput, 'blur');
      fixture.detectChanges();

      expect(minuteInput.value).toBe('20');
    });

    it('should change minutes to max which are more than maxMinute if hour is equal max hour', () => {
      testComponent.selected = new Date(2023, 4, 18, 10, 30);
      testComponent.maxTime = new Date(2023, 4, 18, 10, 40);
      fixture.detectChanges();

      minuteInput.value = '55';
      dispatchInputEvent(minuteInput, 'blur');
      fixture.detectChanges();

      expect(minuteInput.value).toBe('40');
    });

    it('should keep minutes the same if selected hour is less or more than min or max hours', () => {
      testComponent.selected = new Date(2023, 4, 18, 2, 30);
      testComponent.minTime = new Date(2023, 4, 18, 4, 40);
      testComponent.maxTime = new Date(2023, 4, 18, 17, 35);
      fixture.detectChanges();

      minuteInput.value = '25';
      dispatchInputEvent(minuteInput, 'blur');
      fixture.detectChanges();

      expect(minuteInput.value).toBe('30');

      testComponent.selected = new Date(2023, 4, 18, 19, 15);
      fixture.detectChanges();

      minuteInput.value = '1';
      dispatchInputEvent(minuteInput, 'blur');
      fixture.detectChanges();

      expect(minuteInput.value).toBe('15');
    });

    describe('with meridiem', () => {
      let amItem: HTMLDivElement;
      let pmItem: HTMLDivElement;

      beforeEach(waitForAsync(() => {
        testComponent.isMeridiem = true;
        fixture.detectChanges();

        const periodItems = fixture.debugElement.queryAll(By.css('.mat-time-period-item'));
        amItem = periodItems[0].nativeElement;
        pmItem = periodItems[1].nativeElement;
      }));

      it('should change hour to min if consumer entered value less', () => {
        testComponent.selected = new Date(2023, 4, 18, 10, 30);
        testComponent.minTime = new Date(2023, 4, 18, 6, 20);
        fixture.detectChanges();

        hourInput.value = '4';
        dispatchInputEvent(hourInput, 'blur');
        fixture.detectChanges();

        expect(hourInput.value).toBe('06');
      });

      it('should keep pm hours if min at am hours', () => {
        testComponent.selected = new Date(2023, 4, 18, 15, 20);
        testComponent.minTime = new Date(2023, 4, 18, 6, 20);
        fixture.detectChanges();

        hourInput.value = '11';
        dispatchInputEvent(hourInput, 'blur');
        fixture.detectChanges();

        expect(hourInput.value).toBe('11');

        hourInput.value = '12';
        dispatchInputEvent(hourInput, 'blur');
        fixture.detectChanges();

        expect(hourInput.value).toBe('12');
      });

      it('should change hour to max if consumer entered value more', () => {
        testComponent.selected = new Date(2023, 4, 18, 17, 20);
        testComponent.maxTime = new Date(2023, 4, 18, 19, 20);
        fixture.detectChanges();

        hourInput.value = '11';
        dispatchInputEvent(hourInput, 'blur');
        fixture.detectChanges();

        expect(hourInput.value).toBe('07');
      });

      it('should keep am hours if max at pm hours', () => {
        testComponent.selected = new Date(2023, 4, 18, 4, 20);
        testComponent.maxTime = new Date(2023, 4, 18, 19, 20);
        fixture.detectChanges();

        hourInput.value = '11';
        dispatchInputEvent(hourInput, 'blur');
        fixture.detectChanges();

        expect(hourInput.value).toBe('11');

        hourInput.value = '12';
        dispatchInputEvent(hourInput, 'blur');
        fixture.detectChanges();

        expect(hourInput.value).toBe('12');
      });

      it('should change hours correcly if min and max are defined', () => {
        testComponent.selected = new Date(2023, 4, 18, 7, 20);
        testComponent.minTime = new Date(2023, 4, 18, 6, 20);
        testComponent.maxTime = new Date(2023, 4, 18, 21, 20);
        fixture.detectChanges();

        hourInput.value = '5';
        dispatchInputEvent(hourInput, 'blur');
        fixture.detectChanges();

        expect(hourInput.value).toBe('06');

        hourInput.value = '12';
        dispatchInputEvent(hourInput, 'blur');
        fixture.detectChanges();

        expect(hourInput.value).toBe('06');

        // emulates that new selected time has come, +12h from am to pm
        testComponent.selected = new Date(2023, 4, 18, 19, 20);
        fixture.detectChanges();

        hourInput.value = '10';
        dispatchInputEvent(hourInput, 'blur');
        fixture.detectChanges();

        expect(hourInput.value).toBe('09');

        hourInput.value = '12';
        dispatchInputEvent(hourInput, 'blur');
        fixture.detectChanges();

        expect(hourInput.value).toBe('12');
      });

      it('should disabled hours and am meridiem if min > 12h', () => {
        testComponent.selected = new Date(2023, 4, 18, 15, 20);
        testComponent.minTime = new Date(2023, 4, 18, 14, 20);
        fixture.detectChanges();

        expect(amItem.classList).toContain('mat-time-period-item-disabled');

        hourInput.value = '1';
        dispatchInputEvent(hourInput, 'blur');
        fixture.detectChanges();

        expect(hourInput.value).toBe('02');

        hourInput.value = '12';
        dispatchInputEvent(hourInput, 'blur');
        fixture.detectChanges();

        expect(hourInput.value).toBe('02');

        testComponent.selected = new Date(2023, 4, 18, 5, 20);
        fixture.detectChanges();

        hourInput.value = '1';
        dispatchInputEvent(hourInput, 'blur');
        fixture.detectChanges();

        expect(hourInput.value).toBe('05');

        hourInput.value = '12';
        dispatchInputEvent(hourInput, 'blur');
        fixture.detectChanges();

        expect(hourInput.value).toBe('05');
      });

      it('should disabled hours and pm meridiem if max < 12h', () => {
        testComponent.selected = new Date(2023, 4, 18, 6, 20);
        testComponent.maxTime = new Date(2023, 4, 18, 10, 20);
        fixture.detectChanges();

        expect(pmItem.classList).toContain('mat-time-period-item-disabled');

        hourInput.value = '11';
        dispatchInputEvent(hourInput, 'blur');
        fixture.detectChanges();

        expect(hourInput.value).toBe('10');

        hourInput.value = '12';
        dispatchInputEvent(hourInput, 'blur');
        fixture.detectChanges();

        expect(hourInput.value).toBe('12');

        testComponent.selected = new Date(2023, 4, 18, 15, 20);
        fixture.detectChanges();

        hourInput.value = '1';
        dispatchInputEvent(hourInput, 'blur');
        fixture.detectChanges();

        expect(hourInput.value).toBe('03');

        hourInput.value = '12';
        dispatchInputEvent(hourInput, 'blur');
        fixture.detectChanges();

        expect(hourInput.value).toBe('03');
      });

      it('should disable hours and pm meridiem if min & max between 0 and 12', () => {
        testComponent.selected = new Date(2023, 4, 18, 6, 20);
        testComponent.minTime = new Date(2023, 4, 18, 3, 20);
        testComponent.maxTime = new Date(2023, 4, 18, 10, 20);
        fixture.detectChanges();

        expect(pmItem.classList).toContain('mat-time-period-item-disabled');

        hourInput.value = '2';
        dispatchInputEvent(hourInput, 'blur');
        fixture.detectChanges();

        expect(hourInput.value).toBe('03');

        hourInput.value = '12';
        dispatchInputEvent(hourInput, 'blur');
        fixture.detectChanges();

        expect(hourInput.value).toBe('03');

        hourInput.value = '11';
        dispatchInputEvent(hourInput, 'blur');
        fixture.detectChanges();

        expect(hourInput.value).toBe('10');

        testComponent.selected = new Date(2023, 4, 18, 15, 20);
        fixture.detectChanges();

        hourInput.value = '1';
        dispatchInputEvent(hourInput, 'blur');
        fixture.detectChanges();

        expect(hourInput.value).toBe('03');

        hourInput.value = '12';
        dispatchInputEvent(hourInput, 'blur');
        fixture.detectChanges();

        expect(hourInput.value).toBe('03');
      });

      it('should disable hours and am meridiem if min & max between 12 and 24', () => {
        testComponent.selected = new Date(2023, 4, 18, 16, 20);
        testComponent.minTime = new Date(2023, 4, 18, 14, 20);
        testComponent.maxTime = new Date(2023, 4, 18, 21, 20);
        fixture.detectChanges();

        expect(amItem.classList).toContain('mat-time-period-item-disabled');

        hourInput.value = '1';
        dispatchInputEvent(hourInput, 'blur');
        fixture.detectChanges();

        expect(hourInput.value).toBe('02');

        hourInput.value = '12';
        dispatchInputEvent(hourInput, 'blur');
        fixture.detectChanges();

        expect(hourInput.value).toBe('02');

        hourInput.value = '10';
        dispatchInputEvent(hourInput, 'blur');
        fixture.detectChanges();

        expect(hourInput.value).toBe('09');

        testComponent.selected = new Date(2023, 4, 18, 5, 20);
        fixture.detectChanges();

        hourInput.value = '1';
        dispatchInputEvent(hourInput, 'blur');
        fixture.detectChanges();

        expect(hourInput.value).toBe('05');

        hourInput.value = '12';
        dispatchInputEvent(hourInput, 'blur');
        fixture.detectChanges();

        expect(hourInput.value).toBe('05');

        hourInput.value = '11';
        dispatchInputEvent(hourInput, 'blur');
        fixture.detectChanges();

        expect(hourInput.value).toBe('05');
      });

      it('should enable hours if min = 12am', () => {
        testComponent.selected = new Date(2023, 4, 18, 6, 20);
        testComponent.minTime = new Date(2023, 4, 18, 0, 20);
        fixture.detectChanges();

        hourInput.value = '12';
        dispatchInputEvent(hourInput, 'blur');
        fixture.detectChanges();

        expect(hourInput.value).toBe('12');

        hourInput.value = '1';
        dispatchInputEvent(hourInput, 'blur');
        fixture.detectChanges();

        expect(hourInput.value).toBe('01');

        hourInput.value = '11';
        dispatchInputEvent(hourInput, 'blur');
        fixture.detectChanges();

        expect(hourInput.value).toBe('11');

        testComponent.selected = new Date(2023, 4, 18, 15, 20);
        fixture.detectChanges();

        hourInput.value = '12';
        dispatchInputEvent(hourInput, 'blur');
        fixture.detectChanges();

        expect(hourInput.value).toBe('12');

        hourInput.value = '1';
        dispatchInputEvent(hourInput, 'blur');
        fixture.detectChanges();

        expect(hourInput.value).toBe('01');

        hourInput.value = '11';
        dispatchInputEvent(hourInput, 'blur');
        fixture.detectChanges();

        expect(hourInput.value).toBe('11');
      });

      it('should disable am hours if min = 12pm', () => {
        testComponent.selected = new Date(2023, 4, 18, 16, 20);
        testComponent.minTime = new Date(2023, 4, 18, 12, 20);
        fixture.detectChanges();

        expect(amItem.classList).toContain('mat-time-period-item-disabled');

        hourInput.value = '12';
        dispatchInputEvent(hourInput, 'blur');
        fixture.detectChanges();

        expect(hourInput.value).toBe('12');

        hourInput.value = '1';
        dispatchInputEvent(hourInput, 'blur');
        fixture.detectChanges();

        expect(hourInput.value).toBe('01');

        testComponent.selected = new Date(2023, 4, 18, 5, 20);
        fixture.detectChanges();

        hourInput.value = '12';
        dispatchInputEvent(hourInput, 'blur');
        fixture.detectChanges();

        expect(hourInput.value).toBe('05');

        hourInput.value = '1';
        dispatchInputEvent(hourInput, 'blur');
        fixture.detectChanges();

        expect(hourInput.value).toBe('05');
      });

      it('should disable hours if min = 12am and max < 12', () => {
        testComponent.selected = new Date(2023, 4, 18, 6, 20);
        testComponent.minTime = new Date(2023, 4, 18, 0, 20);
        testComponent.maxTime = new Date(2023, 4, 18, 8, 20);
        fixture.detectChanges();

        expect(pmItem.classList).toContain('mat-time-period-item-disabled');

        hourInput.value = '9';
        dispatchInputEvent(hourInput, 'blur');
        fixture.detectChanges();

        expect(hourInput.value).toBe('08');

        hourInput.value = '12';
        dispatchInputEvent(hourInput, 'blur');
        fixture.detectChanges();

        expect(hourInput.value).toBe('12');

        testComponent.selected = new Date(2023, 4, 18, 15, 20);
        fixture.detectChanges();

        hourInput.value = '1';
        dispatchInputEvent(hourInput, 'blur');
        fixture.detectChanges();

        expect(hourInput.value).toBe('03');

        hourInput.value = '12';
        dispatchInputEvent(hourInput, 'blur');
        fixture.detectChanges();

        expect(hourInput.value).toBe('03');
      });

      it('should enable am hours and disabled pm hours if min = 12am and max > 12', () => {
        testComponent.selected = new Date(2023, 4, 18, 6, 20);
        testComponent.minTime = new Date(2023, 4, 18, 0, 20);
        testComponent.maxTime = new Date(2023, 4, 18, 18, 20);
        fixture.detectChanges();

        expect(pmItem.classList).not.toContain('mat-time-period-item-disabled');

        hourInput.value = '12';
        dispatchInputEvent(hourInput, 'blur');
        fixture.detectChanges();

        expect(hourInput.value).toBe('12');

        hourInput.value = '10';
        dispatchInputEvent(hourInput, 'blur');
        fixture.detectChanges();

        expect(hourInput.value).toBe('10');

        testComponent.selected = new Date(2023, 4, 18, 15, 20);
        fixture.detectChanges();

        hourInput.value = '1';
        dispatchInputEvent(hourInput, 'blur');
        fixture.detectChanges();

        expect(hourInput.value).toBe('01');

        hourInput.value = '12';
        dispatchInputEvent(hourInput, 'blur');
        fixture.detectChanges();

        expect(hourInput.value).toBe('12');

        hourInput.value = '7';
        dispatchInputEvent(hourInput, 'blur');
        fixture.detectChanges();

        expect(hourInput.value).toBe('06');
      });

      it('should disable hours if max = 12am', () => {
        testComponent.selected = new Date(2023, 4, 18, 6, 20);
        testComponent.maxTime = new Date(2023, 4, 18, 0, 20);
        fixture.detectChanges();

        expect(pmItem.classList).toContain('mat-time-period-item-disabled');

        hourInput.value = '7';
        dispatchInputEvent(hourInput, 'blur');
        fixture.detectChanges();

        expect(hourInput.value).toBe('12');

        hourInput.value = '12';
        dispatchInputEvent(hourInput, 'blur');
        fixture.detectChanges();

        expect(hourInput.value).toBe('12');

        testComponent.selected = new Date(2023, 4, 18, 15, 20);
        fixture.detectChanges();

        hourInput.value = '12';
        dispatchInputEvent(hourInput, 'blur');
        fixture.detectChanges();

        expect(hourInput.value).toBe('03');
      });

      it('should disable hours if max = 12pm', () => {
        testComponent.selected = new Date(2023, 4, 18, 6, 20);
        testComponent.maxTime = new Date(2023, 4, 18, 12, 20);
        fixture.detectChanges();

        expect(pmItem.classList).not.toContain('mat-time-period-item-disabled');

        hourInput.value = '1';
        dispatchInputEvent(hourInput, 'blur');
        fixture.detectChanges();

        expect(hourInput.value).toBe('01');

        hourInput.value = '11';
        dispatchInputEvent(hourInput, 'blur');
        fixture.detectChanges();

        expect(hourInput.value).toBe('11');

        hourInput.value = '12';
        dispatchInputEvent(hourInput, 'blur');
        fixture.detectChanges();

        expect(hourInput.value).toBe('12');

        testComponent.selected = new Date(2023, 4, 18, 15, 20);
        fixture.detectChanges();

        hourInput.value = '12';
        dispatchInputEvent(hourInput, 'blur');
        fixture.detectChanges();

        expect(hourInput.value).toBe('12');

        hourInput.value = '1';
        dispatchInputEvent(hourInput, 'blur');
        fixture.detectChanges();

        expect(hourInput.value).toBe('12');
      });

      it('should disable hours if max = 12pm and min < 12', () => {
        testComponent.selected = new Date(2023, 4, 18, 6, 20);
        testComponent.minTime = new Date(2023, 4, 18, 4, 20);
        testComponent.maxTime = new Date(2023, 4, 18, 12, 20);
        fixture.detectChanges();

        expect(pmItem.classList).not.toContain('mat-time-period-item-disabled');

        hourInput.value = '1';
        dispatchInputEvent(hourInput, 'blur');
        fixture.detectChanges();

        expect(hourInput.value).toBe('04');

        hourInput.value = '12';
        dispatchInputEvent(hourInput, 'blur');
        fixture.detectChanges();

        expect(hourInput.value).toBe('04');

        testComponent.selected = new Date(2023, 4, 18, 15, 20);
        fixture.detectChanges();

        hourInput.value = '1';
        dispatchInputEvent(hourInput, 'blur');
        fixture.detectChanges();

        expect(hourInput.value).toBe('12');

        hourInput.value = '12';
        dispatchInputEvent(hourInput, 'blur');
        fixture.detectChanges();

        expect(hourInput.value).toBe('12');
      });

      it('should disable minutes after switch ap/pm if min/max have 12h difference', () => {
        testComponent.selected = new Date(2023, 4, 18, 7, 45);
        testComponent.minTime = new Date(2023, 4, 18, 7, 40);
        testComponent.maxTime = new Date(2023, 4, 18, 19, 25);
        fixture.detectChanges();

        minuteInput.value = '35';
        dispatchInputEvent(minuteInput, 'blur');
        fixture.detectChanges();

        expect(minuteInput.value).toBe('40');

        testComponent.selected = new Date(2023, 4, 18, 19, 20);
        fixture.detectChanges();

        minuteInput.value = '28';
        dispatchInputEvent(minuteInput, 'blur');
        fixture.detectChanges();

        expect(minuteInput.value).toBe('25');
      });

      it('should disable minutes if max hour is 12pm', () => {
        testComponent.selected = new Date(2023, 4, 18, 12, 15);
        testComponent.maxTime = new Date(2023, 4, 18, 12, 25);
        fixture.detectChanges();

        minuteInput.value = '28';
        dispatchInputEvent(minuteInput, 'blur');
        fixture.detectChanges();

        expect(minuteInput.value).toBe('25');
      });
    });
  });
});

function dispatchInputEvent(input: HTMLInputElement, type: 'focus' | 'blur') {
  const event = new InputEvent(type);
  input.dispatchEvent(event);
}

function dispatchKeyEvent(input: HTMLInputElement, keyCode: number) {
  const event = new KeyboardEvent('keydown', { keyCode });
  input.dispatchEvent(event);
}

@Component({
  template: `
    <mat-time-inputs
      [isMeridiem]="isMeridiem"
      [selected]="selected"
      [minuteInterval]="minuteInterval"
      (_userSelection)="onSelect($event)"
    ></mat-time-inputs>
  `,
})
class StandardTimeInputs {
  @ViewChildren('.mat-time-input') timeInputs: QueryList<MatHourInput | MatMinuteInput>;

  isMeridiem = false;
  selected: Date | null = null;
  minuteInterval = 1;
  onSelect(value: Date) {}
}

@Component({
  template: `
    <mat-time-inputs
      [isMeridiem]="true"
      [selected]="selected"
      (_userSelection)="onSelect($event)"
    ></mat-time-inputs>
  `,
})
class TimeInputsWithMeridiem {
  @ViewChildren('.mat-time-input') timeInputs: QueryList<MatHourInput | MatMinuteInput>;

  selected: Date | null = null;
  onSelect(value: Date) {}
}

@Component({
  template: `
    <mat-time-inputs
      [isMeridiem]="isMeridiem"
      [selected]="selected"
      [minTime]="minTime"
      [maxTime]="maxTime"
      (_userSelection)="onSelect($event)"
    ></mat-time-inputs>
  `,
})
class WithMinMaxTimeInputs {
  @ViewChildren('.mat-time-input') timeInputs: QueryList<MatHourInput | MatMinuteInput>;

  isMeridiem = false;
  selected: Date | null = null;
  minTime: Date | null = null;
  maxTime: Date | null = null;
  onSelect(value: Date) {}
}
