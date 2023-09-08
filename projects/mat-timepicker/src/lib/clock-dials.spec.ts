import { Component, DebugElement, Type } from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  flush,
  tick,
  waitForAsync,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { MatNativeDateTimeModule } from './adapter';
import { MatTimepickerModule } from './timepicker.module';

// Creates a test component fixture.
function createComponent<T>(component: Type<T>): ComponentFixture<T> {
  TestBed.configureTestingModule({
    imports: [MatTimepickerModule, MatNativeDateTimeModule],
    declarations: [component],
  });

  return TestBed.createComponent(component);
}

describe('MatClockDials', () => {
  describe('standard', () => {
    let fixture: ComponentFixture<StandardClockDials>;
    let testComponent: StandardClockDials;
    let hostElement: HTMLElement;
    let clockDialValuesElements: DebugElement[];
    let hourElement: HTMLDivElement;
    let minuteElement: HTMLDivElement;

    beforeEach(waitForAsync(() => {
      fixture = createComponent(StandardClockDials);
      fixture.detectChanges();
      testComponent = fixture.componentInstance;
      hostElement = fixture.nativeElement;
      clockDialValuesElements = fixture.debugElement.queryAll(
        By.css('.mat-clock-dial-value')
      );
      hourElement = clockDialValuesElements[0].nativeElement;
      minuteElement = clockDialValuesElements[1].nativeElement;

      spyOn(testComponent, 'onSelect');
    }));

    it('should render default clock dials', () => {
      const container = fixture.debugElement.query(By.css('.mat-clock-dials'));

      expect(container).not.toBeNull();
      expect(
        container.query(By.css('.mat-timepicker-content-layout-hours'))
      ).not.toBeNull();
      expect(
        container.query(By.css('.mat-timepicker-content-layout-minutes'))
      ).not.toBeNull();
      expect(container.queryAll(By.css('.mat-clock-dial-value')).length).toBe(
        2
      );
    });

    it('should change the view after click value box', fakeAsync(() => {
      expect(getDialElement('.mat-clock-dial-hours')).not.toBeNull();
      expect(getDialElement('.mat-clock-dial-minutes')).toBeNull();

      minuteElement.click();
      fixture.detectChanges();
      tick();
      flush();

      expect(getDialElement('.mat-clock-dial-hours')).toBeNull();
      expect(getDialElement('.mat-clock-dial-minutes')).not.toBeNull();
    }));

    it('should render default values in the value blocks', () => {
      const now = new Date();

      expect(hourElement.textContent).toContain(`${now.getHours()}`);
      expect(minuteElement.textContent).toContain(`${now.getMinutes()}`);
    });

    it('should render predefined values in the value blocks', () => {
      testComponent.selected = new Date(2023, 4, 8, 23, 16);
      fixture.detectChanges();

      expect(hourElement.textContent?.trim()).toBe('23');
      expect(minuteElement.textContent?.trim()).toBe('16');
    });

    it('should render hour with zero prefix if value < 10', () => {
      testComponent.selected = new Date(2023, 4, 8, 7, 8);
      fixture.detectChanges();

      expect(hourElement.textContent?.trim()).toBe('07');
      expect(minuteElement.textContent?.trim()).toBe('08');
    });

    it('should render hour according to format', () => {
      testComponent.isMeridiem = true;
      testComponent.selected = new Date(2023, 4, 8, 23, 16);
      fixture.detectChanges();

      expect(hourElement.textContent?.trim()).toBe('11');
      expect(minuteElement.textContent?.trim()).toBe('16');
    });

    it('should render 0 hours as 12 if time format is 12h', () => {
      testComponent.isMeridiem = true;
      testComponent.selected = new Date(2023, 4, 8, 0, 16);
      fixture.detectChanges();

      expect(hourElement.textContent?.trim()).toBe('12');
      expect(minuteElement.textContent?.trim()).toBe('16');
    });

    it('should call _userSelection when period has changed', () => {
      testComponent.isMeridiem = true;
      testComponent.selected = new Date(2023, 4, 8, 23, 16);
      fixture.detectChanges();
      expect(testComponent.onSelect).not.toHaveBeenCalled();

      const amElement = document.querySelectorAll<HTMLElement>(
        '.mat-time-period-item'
      )[0];
      amElement.click();

      expect(testComponent.onSelect).toHaveBeenCalledOnceWith(
        new Date(2023, 4, 8, 11, 16)
      );
    });

    // TODO: doesn't work as expected
    // broken UI for some reason
    xit('should change hour if consumer clicks dial cell', () => {
      testComponent.selected = new Date(2023, 4, 8, 14, 20);
      fixture.detectChanges();

      expect(getDialCell(14).classList).toContain('mat-primary');

      clickDialCell(getDialCell(17));
      fixture.detectChanges();

      expect(getDialElement('.mat-clock-dial-minutes')).not.toBeNull();
      expect(hourElement.textContent?.trim()).toBe('17');
      expect(getDialCell(20 / 5).classList).toContain('mat-primary');
      fixture.detectChanges();

      const minuteCellIndex = 5;
      clickDialCell(getDialCell(minuteCellIndex));
      fixture.detectChanges();

      expect(getDialElement('.mat-clock-dial-minutes')).not.toBeNull();
      expect(minuteElement.textContent?.trim()).toBe(`${minuteCellIndex * 5}`); // 5 - is a step
      expect(getDialCell(8).classList).toContain('mat-primary');
    });

    it('should have intl string', () => {
      expect(
        hostElement.querySelector('.mat-timepicker-content-layout-title')
          ?.textContent
      ).toBe('Select time');
    });

    it('should have active class for hours and minutes', () => {
      testComponent.selected = new Date(2023, 4, 27, 22, 20);
      fixture.detectChanges();

      expect(getDialCell(22).classList).toContain('mat-clock-dial-cell-active');

      minuteElement.click();
      fixture.detectChanges();

      expect(getDialCell(20 / 5).classList).toContain(
        'mat-clock-dial-cell-active'
      );
    });
  });

  describe('with min/max', () => {
    let fixture: ComponentFixture<WithMinMaxClockDials>;
    let testComponent: WithMinMaxClockDials;
    let hostElement: HTMLElement;
    let clockDialValuesElements: DebugElement[];
    let hourElement: HTMLDivElement;
    let minuteElement: HTMLDivElement;

    beforeEach(waitForAsync(() => {
      fixture = createComponent(WithMinMaxClockDials);
      fixture.detectChanges();
      testComponent = fixture.componentInstance;
      hostElement = fixture.nativeElement;
      clockDialValuesElements = fixture.debugElement.queryAll(
        By.css('.mat-clock-dial-value')
      );
      hourElement = clockDialValuesElements[0].nativeElement;
      minuteElement = clockDialValuesElements[1].nativeElement;

      spyOn(testComponent, 'onSelect');
    }));

    it("should show selected time if it's less than min time", () => {
      testComponent.selected = new Date(2023, 4, 18, 2, 30);
      testComponent.minTime = new Date(2023, 4, 18, 4, 15);
      fixture.detectChanges();

      expect(hourElement.textContent?.trim()).toBe('02');
      expect(minuteElement.textContent?.trim()).toBe('30');
    });

    it("should show selected time if it's more than max time", () => {
      testComponent.selected = new Date(2023, 4, 18, 10, 30);
      testComponent.maxTime = new Date(2023, 4, 18, 9, 15);
      fixture.detectChanges();

      expect(hourElement.textContent?.trim()).toBe('10');
      expect(minuteElement.textContent?.trim()).toBe('30');
    });

    it('should disable hours which are less than min', () => {
      testComponent.minTime = new Date(2023, 4, 18, 6, 20);
      fixture.detectChanges();

      expect(getDialCell(6).classList).not.toContain(
        'mat-clock-dial-cell-disabled'
      );
      expect(getDialCell(5).classList).toContain(
        'mat-clock-dial-cell-disabled'
      );
    });

    it('should disable hours which are more than max', () => {
      testComponent.maxTime = new Date(2023, 4, 18, 6, 20);
      fixture.detectChanges();

      expect(getDialCell(6).classList).not.toContain(
        'mat-clock-dial-cell-disabled'
      );
      expect(getDialCell(7).classList).toContain(
        'mat-clock-dial-cell-disabled'
      );
    });

    it('should disable minutes which are less than minMinute if hour is equal min hour', () => {
      testComponent.selected = new Date(2023, 4, 18, 10, 30);
      testComponent.minTime = new Date(2023, 4, 18, 10, 20);
      minuteElement.click();
      fixture.detectChanges();

      expect(getDialCell(getMinuteCellIndex(20)).classList).not.toContain(
        'mat-clock-dial-cell-disabled'
      );
      expect(getDialCell(getMinuteCellIndex(15)).classList).toContain(
        'mat-clock-dial-cell-disabled'
      );

      testComponent.selected = new Date(2023, 4, 18, 11, 30);
      fixture.detectChanges();

      expect(
        hostElement.querySelectorAll('.mat-clock-dial-cell-disabled').length
      ).toBe(0);
    });

    it('should disable minutes which are more than maxMinute if hour is equal max hour', () => {
      testComponent.selected = new Date(2023, 4, 18, 10, 30);
      testComponent.maxTime = new Date(2023, 4, 18, 10, 40);
      minuteElement.click();
      fixture.detectChanges();

      expect(getDialCell(getMinuteCellIndex(40)).classList).not.toContain(
        'mat-clock-dial-cell-disabled'
      );
      expect(getDialCell(getMinuteCellIndex(45)).classList).toContain(
        'mat-clock-dial-cell-disabled'
      );

      testComponent.selected = new Date(2023, 4, 18, 9, 30);
      fixture.detectChanges();

      expect(
        hostElement.querySelectorAll('.mat-clock-dial-cell-disabled').length
      ).toBe(0);
    });

    it('should disable minutes if selected hour is less or more than min or max hours', () => {
      testComponent.selected = new Date(2023, 4, 18, 2, 30);
      testComponent.minTime = new Date(2023, 4, 18, 4, 40);
      testComponent.maxTime = new Date(2023, 4, 18, 17, 40);
      minuteElement.click();
      fixture.detectChanges();

      expect(
        hostElement.querySelectorAll('.mat-clock-dial-cell-disabled').length
      ).toBe(12);

      testComponent.selected = new Date(2023, 4, 18, 19, 30);
      fixture.detectChanges();

      expect(
        hostElement.querySelectorAll('.mat-clock-dial-cell-disabled').length
      ).toBe(12);
    });

    it('should disable hours if max = 0', () => {
      testComponent.selected = new Date(2023, 4, 18, 6, 20);
      testComponent.maxTime = new Date(2023, 4, 18, 0, 20);
      fixture.detectChanges();

      expect(getDialCell(12).classList).toContain(
        'mat-clock-dial-cell-disabled'
      );
      expect(getDialCell(1).classList).toContain(
        'mat-clock-dial-cell-disabled'
      );
    });

    describe('with meridiem', () => {
      let amItem: HTMLDivElement;
      let pmItem: HTMLDivElement;

      beforeEach(waitForAsync(() => {
        testComponent.isMeridiem = true;
        fixture.detectChanges();

        const periodItems = fixture.debugElement.queryAll(
          By.css('.mat-time-period-item')
        );
        amItem = periodItems[0].nativeElement;
        pmItem = periodItems[1].nativeElement;
      }));

      it('should disable hours which are less than min', () => {
        testComponent.selected = new Date(2023, 4, 18, 7, 20);
        testComponent.minTime = new Date(2023, 4, 18, 6, 20);
        fixture.detectChanges();

        // index = hour - 1 (6 - 1)
        expect(getDialCell(6, true).classList).not.toContain(
          'mat-clock-dial-cell-disabled'
        );
        expect(getDialCell(5, true).classList).toContain(
          'mat-clock-dial-cell-disabled'
        );
        expect(getDialCell(12, true).classList).toContain(
          'mat-clock-dial-cell-disabled'
        );
      });

      it('should enable pm hours if min at am hours', () => {
        testComponent.selected = new Date(2023, 4, 18, 15, 20);
        testComponent.minTime = new Date(2023, 4, 18, 6, 20);
        fixture.detectChanges();

        expect(
          hostElement.querySelectorAll('.mat-clock-dial-cell-disabled').length
        ).toBe(0);
      });

      it('should disable hours which are more than max', () => {
        testComponent.selected = new Date(2023, 4, 18, 17, 20);
        testComponent.maxTime = new Date(2023, 4, 18, 19, 20);
        fixture.detectChanges();

        expect(getDialCell(7, true).classList).not.toContain(
          'mat-clock-dial-cell-disabled'
        );
        expect(getDialCell(8, true).classList).toContain(
          'mat-clock-dial-cell-disabled'
        );
        expect(getDialCell(12, true).classList).not.toContain(
          'mat-clock-dial-cell-disabled'
        );
      });

      it('should enable am hours if max at pm hours', () => {
        testComponent.selected = new Date(2023, 4, 18, 4, 20);
        testComponent.maxTime = new Date(2023, 4, 18, 19, 20);
        fixture.detectChanges();

        expect(
          hostElement.querySelectorAll('.mat-clock-dial-cell-disabled').length
        ).toBe(0);
      });

      it('should disable hours correcly if min and max are defined', () => {
        testComponent.selected = new Date(2023, 4, 18, 7, 20);
        testComponent.minTime = new Date(2023, 4, 18, 6, 20);
        testComponent.maxTime = new Date(2023, 4, 18, 21, 20);
        fixture.detectChanges();

        // index = hour - 1 (6 - 1)
        expect(getDialCell(6, true).classList).not.toContain(
          'mat-clock-dial-cell-disabled'
        );
        expect(getDialCell(5, true).classList).toContain(
          'mat-clock-dial-cell-disabled'
        );
        expect(getDialCell(12, true).classList).toContain(
          'mat-clock-dial-cell-disabled'
        );
        expect(
          hostElement.querySelectorAll('.mat-clock-dial-cell-disabled').length
        ).toBe(6);

        // emulates that new selected time has come, +12h from am to pm
        testComponent.selected = new Date(2023, 4, 18, 19, 20);
        fixture.detectChanges();

        expect(getDialCell(9, true).classList).not.toContain(
          'mat-clock-dial-cell-disabled'
        );
        expect(getDialCell(10, true).classList).toContain(
          'mat-clock-dial-cell-disabled'
        );
        expect(getDialCell(12, true).classList).not.toContain(
          'mat-clock-dial-cell-disabled'
        );
        expect(
          hostElement.querySelectorAll('.mat-clock-dial-cell-disabled').length
        ).toBe(2);
      });

      it('should disabled hours and am meridiem if min > 12h', () => {
        testComponent.selected = new Date(2023, 4, 18, 15, 20);
        testComponent.minTime = new Date(2023, 4, 18, 14, 20);
        fixture.detectChanges();

        expect(getDialCell(2, true).classList).not.toContain(
          'mat-clock-dial-cell-disabled'
        );
        expect(getDialCell(1, true).classList).toContain(
          'mat-clock-dial-cell-disabled'
        );
        expect(getDialCell(12, true).classList).toContain(
          'mat-clock-dial-cell-disabled'
        );
        expect(amItem.classList).toContain('mat-time-period-item-disabled');

        testComponent.selected = new Date(2023, 4, 18, 5, 20);
        fixture.detectChanges();

        expect(
          hostElement.querySelectorAll('.mat-clock-dial-cell-disabled').length
        ).toBe(12);
      });

      it('should disabled hours and pm meridiem if max < 12h', () => {
        testComponent.selected = new Date(2023, 4, 18, 6, 20);
        testComponent.maxTime = new Date(2023, 4, 18, 10, 20);
        fixture.detectChanges();

        expect(getDialCell(10, true).classList).not.toContain(
          'mat-clock-dial-cell-disabled'
        );
        expect(getDialCell(11, true).classList).toContain(
          'mat-clock-dial-cell-disabled'
        );
        expect(getDialCell(12, true).classList).not.toContain(
          'mat-clock-dial-cell-disabled'
        );
        expect(pmItem.classList).toContain('mat-time-period-item-disabled');

        testComponent.selected = new Date(2023, 4, 18, 15, 20);
        fixture.detectChanges();

        expect(
          hostElement.querySelectorAll('.mat-clock-dial-cell-disabled').length
        ).toBe(12);
      });

      it('should disable hours and pm meridiem if min & max between 0 and 12', () => {
        testComponent.selected = new Date(2023, 4, 18, 6, 20);
        testComponent.minTime = new Date(2023, 4, 18, 3, 20);
        testComponent.maxTime = new Date(2023, 4, 18, 10, 20);
        fixture.detectChanges();

        expect(getDialCell(3, true).classList).not.toContain(
          'mat-clock-dial-cell-disabled'
        );
        expect(getDialCell(10, true).classList).not.toContain(
          'mat-clock-dial-cell-disabled'
        );
        expect(getDialCell(2, true).classList).toContain(
          'mat-clock-dial-cell-disabled'
        );
        expect(getDialCell(11, true).classList).toContain(
          'mat-clock-dial-cell-disabled'
        );
        expect(getDialCell(12, true).classList).toContain(
          'mat-clock-dial-cell-disabled'
        );
        expect(pmItem.classList).toContain('mat-time-period-item-disabled');

        testComponent.selected = new Date(2023, 4, 18, 15, 20);
        fixture.detectChanges();

        expect(
          hostElement.querySelectorAll('.mat-clock-dial-cell-disabled').length
        ).toBe(12);
      });

      it('should disable hours and am meridiem if min & max between 12 and 24', () => {
        testComponent.selected = new Date(2023, 4, 18, 16, 20);
        testComponent.minTime = new Date(2023, 4, 18, 14, 20);
        testComponent.maxTime = new Date(2023, 4, 18, 21, 20);
        fixture.detectChanges();

        expect(getDialCell(2, true).classList).not.toContain(
          'mat-clock-dial-cell-disabled'
        );
        expect(getDialCell(9, true).classList).not.toContain(
          'mat-clock-dial-cell-disabled'
        );
        expect(getDialCell(1, true).classList).toContain(
          'mat-clock-dial-cell-disabled'
        );
        expect(getDialCell(10, true).classList).toContain(
          'mat-clock-dial-cell-disabled'
        );
        expect(getDialCell(12, true).classList).toContain(
          'mat-clock-dial-cell-disabled'
        );
        expect(amItem.classList).toContain('mat-time-period-item-disabled');

        testComponent.selected = new Date(2023, 4, 18, 5, 20);
        fixture.detectChanges();

        expect(
          hostElement.querySelectorAll('.mat-clock-dial-cell-disabled').length
        ).toBe(12);
      });

      it('should enable hours if min = 12am', () => {
        testComponent.selected = new Date(2023, 4, 18, 6, 20);
        testComponent.minTime = new Date(2023, 4, 18, 0, 20);
        fixture.detectChanges();

        expect(
          hostElement.querySelectorAll('.mat-clock-dial-cell-disabled').length
        ).toBe(0);

        testComponent.selected = new Date(2023, 4, 18, 15, 20);
        fixture.detectChanges();

        expect(
          hostElement.querySelectorAll('.mat-clock-dial-cell-disabled').length
        ).toBe(0);
      });

      it('should disable am hours if min = 12pm', () => {
        testComponent.selected = new Date(2023, 4, 18, 16, 20);
        testComponent.minTime = new Date(2023, 4, 18, 12, 20);
        fixture.detectChanges();

        expect(
          hostElement.querySelectorAll('.mat-clock-dial-cell-disabled').length
        ).toBe(0);
        expect(amItem.classList).toContain('mat-time-period-item-disabled');

        testComponent.selected = new Date(2023, 4, 18, 5, 20);
        fixture.detectChanges();

        expect(
          hostElement.querySelectorAll('.mat-clock-dial-cell-disabled').length
        ).toBe(12);
      });

      it('should disable hours if min = 12am and max < 12', () => {
        testComponent.selected = new Date(2023, 4, 18, 6, 20);
        testComponent.minTime = new Date(2023, 4, 18, 0, 20);
        testComponent.maxTime = new Date(2023, 4, 18, 8, 20);
        fixture.detectChanges();

        expect(getDialCell(8, true).classList).not.toContain(
          'mat-clock-dial-cell-disabled'
        );
        expect(getDialCell(9, true).classList).toContain(
          'mat-clock-dial-cell-disabled'
        );
        expect(getDialCell(12, true).classList).not.toContain(
          'mat-clock-dial-cell-disabled'
        );
        expect(pmItem.classList).toContain('mat-time-period-item-disabled');

        testComponent.selected = new Date(2023, 4, 18, 15, 20);
        fixture.detectChanges();

        expect(
          hostElement.querySelectorAll('.mat-clock-dial-cell-disabled').length
        ).toBe(12);
      });

      it('should enable am hours and disabled pm hours if min = 12am and max > 12', () => {
        testComponent.selected = new Date(2023, 4, 18, 6, 20);
        testComponent.minTime = new Date(2023, 4, 18, 0, 20);
        testComponent.maxTime = new Date(2023, 4, 18, 18, 20);
        fixture.detectChanges();

        expect(
          hostElement.querySelectorAll('.mat-clock-dial-cell-disabled').length
        ).toBe(0);
        expect(pmItem.classList).not.toContain('mat-time-period-item-disabled');

        testComponent.selected = new Date(2023, 4, 18, 15, 20);
        fixture.detectChanges();

        expect(getDialCell(6, true).classList).not.toContain(
          'mat-clock-dial-cell-disabled'
        );
        expect(getDialCell(7, true).classList).toContain(
          'mat-clock-dial-cell-disabled'
        );
        expect(getDialCell(12, true).classList).not.toContain(
          'mat-clock-dial-cell-disabled'
        );
      });

      it('should disable hours if max = 12am', () => {
        testComponent.selected = new Date(2023, 4, 18, 6, 20);
        testComponent.maxTime = new Date(2023, 4, 18, 0, 20);
        fixture.detectChanges();

        expect(getDialCell(12, true).classList).not.toContain(
          'mat-clock-dial-cell-disabled'
        );
        expect(getDialCell(1, true).classList).toContain(
          'mat-clock-dial-cell-disabled'
        );
        expect(pmItem.classList).toContain('mat-time-period-item-disabled');

        testComponent.selected = new Date(2023, 4, 18, 15, 20);
        fixture.detectChanges();

        expect(
          hostElement.querySelectorAll('.mat-clock-dial-cell-disabled').length
        ).toBe(12);
      });

      it('should disable hours if max = 12pm', () => {
        testComponent.selected = new Date(2023, 4, 18, 6, 20);
        testComponent.maxTime = new Date(2023, 4, 18, 12, 20);
        fixture.detectChanges();

        expect(
          hostElement.querySelectorAll('.mat-clock-dial-cell-disabled').length
        ).toBe(0);
        expect(pmItem.classList).not.toContain('mat-time-period-item-disabled');

        testComponent.selected = new Date(2023, 4, 18, 15, 20);
        fixture.detectChanges();

        expect(getDialCell(12, true).classList).not.toContain(
          'mat-clock-dial-cell-disabled'
        );
        expect(getDialCell(1, true).classList).toContain(
          'mat-clock-dial-cell-disabled'
        );
      });

      it('should disable hours if max = 12pm and min < 12', () => {
        testComponent.selected = new Date(2023, 4, 18, 6, 20);
        testComponent.minTime = new Date(2023, 4, 18, 4, 20);
        testComponent.maxTime = new Date(2023, 4, 18, 12, 20);
        fixture.detectChanges();

        expect(getDialCell(3, true).classList).toContain(
          'mat-clock-dial-cell-disabled'
        );
        expect(getDialCell(4, true).classList).not.toContain(
          'mat-clock-dial-cell-disabled'
        );
        expect(getDialCell(12, true).classList).toContain(
          'mat-clock-dial-cell-disabled'
        );
        expect(pmItem.classList).not.toContain('mat-time-period-item-disabled');

        testComponent.selected = new Date(2023, 4, 18, 15, 20);
        fixture.detectChanges();

        expect(getDialCell(12, true).classList).not.toContain(
          'mat-clock-dial-cell-disabled'
        );
        expect(
          hostElement.querySelectorAll('.mat-clock-dial-cell-disabled').length
        ).toBe(11);
      });

      it('should disable minutes after switch ap/pm if min/max have 12h difference', () => {
        testComponent.selected = new Date(2023, 4, 18, 7, 45);
        testComponent.minTime = new Date(2023, 4, 18, 7, 40);
        testComponent.maxTime = new Date(2023, 4, 18, 19, 25);
        minuteElement.click();
        fixture.detectChanges();

        expect(getDialCell(getMinuteCellIndex(40)).classList).not.toContain(
          'mat-clock-dial-cell-disabled'
        );
        expect(getDialCell(getMinuteCellIndex(35)).classList).toContain(
          'mat-clock-dial-cell-disabled'
        );

        testComponent.selected = new Date(2023, 4, 18, 19, 20);
        fixture.detectChanges();

        expect(getDialCell(getMinuteCellIndex(25)).classList).not.toContain(
          'mat-clock-dial-cell-disabled'
        );
        expect(getDialCell(getMinuteCellIndex(30)).classList).toContain(
          'mat-clock-dial-cell-disabled'
        );
      });

      it('should disable minutes if max hour is 12pm', () => {
        testComponent.selected = new Date(2023, 4, 18, 12, 15);
        testComponent.maxTime = new Date(2023, 4, 18, 12, 25);
        minuteElement.click();
        fixture.detectChanges();

        expect(getDialCell(getMinuteCellIndex(25)).classList).not.toContain(
          'mat-clock-dial-cell-disabled'
        );
        expect(getDialCell(getMinuteCellIndex(30)).classList).toContain(
          'mat-clock-dial-cell-disabled'
        );
      });
    });
  });
});

type DialClass = '.mat-clock-dial-hours' | '.mat-clock-dial-minutes';

function getDialElement(dial: DialClass): HTMLElement | null {
  return document.querySelector<HTMLElement>(dial);
}

export function getDialCell(hour: number, meridiem?: boolean): HTMLElement {
  const content = document.querySelector('.mat-clock-dial-faces')!;
  const cells = content.querySelectorAll<HTMLElement>('.mat-clock-dial-cell');
  return cells[meridiem ? hour - 1 : hour];
}

export function clickDialCell(cell: HTMLElement) {
  const dialElement = document.querySelector<HTMLElement>('.mat-clock-dial')!;
  const { x, y, height, width } = cell.getBoundingClientRect();
  const clientX = x + width / 2;
  const clientY = y + height / 2;

  const mousedown = new MouseEvent('mousedown', { clientX, clientY });
  const mousemove = new MouseEvent('mousemove', { clientX, clientY });
  const mouseup = new MouseEvent('mouseup', { clientX, clientY });
  dialElement.dispatchEvent(mousedown);
  document.dispatchEvent(mousemove);
  document.dispatchEvent(mouseup);
}

export function getMinuteCellIndex(minute: number): number {
  return minute / 5;
}

@Component({
  template: `<mat-clock-dials
    [isMeridiem]="isMeridiem"
    [selected]="selected"
    (_userSelection)="onSelect($event)"
  ></mat-clock-dials>`,
})
class StandardClockDials {
  isMeridiem = false;
  selected: Date | null = null;
  onSelect(value: Date) {}
}

@Component({
  template: `
    <mat-clock-dials
      [isMeridiem]="isMeridiem"
      [selected]="selected"
      [minTime]="minTime"
      [maxTime]="maxTime"
    ></mat-clock-dials>
  `,
})
class WithMinMaxClockDials {
  isMeridiem = false;
  selected: Date | null = null;
  minTime: Date | null = null;
  maxTime: Date | null = null;
  onSelect(value: Date) {}
}
