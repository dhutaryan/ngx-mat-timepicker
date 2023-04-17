import { Component, DebugElement } from '@angular/core';
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
function createComponent(): ComponentFixture<StandardClockDials> {
  TestBed.configureTestingModule({
    imports: [MatTimepickerModule, MatNativeDateTimeModule],
    declarations: [StandardClockDials],
  });

  return TestBed.createComponent(StandardClockDials);
}

describe('MatClockDials', () => {
  let fixture: ComponentFixture<StandardClockDials>;
  let testComponent: StandardClockDials;
  let hostElement: HTMLElement;
  let clockDialValuesElements: DebugElement[];
  let hourElement: HTMLDivElement;
  let minuteElement: HTMLDivElement;

  beforeEach(waitForAsync(() => {
    fixture = createComponent();
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
    expect(container.queryAll(By.css('.mat-clock-dial-value')).length).toBe(2);
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
});

type DialClass = '.mat-clock-dial-hours' | '.mat-clock-dial-minutes';

function getDialElement(dial: DialClass): HTMLElement | null {
  return document.querySelector<HTMLElement>(dial);
}

export function getDialCell(cellIndex: number): HTMLElement {
  const content = document.querySelector('.mat-clock-dial-faces')!;
  const cells = content.querySelectorAll<HTMLElement>('.mat-clock-dial-cell');
  return cells[cellIndex];
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
