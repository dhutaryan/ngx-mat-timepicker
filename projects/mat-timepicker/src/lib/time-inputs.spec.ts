import {
  Component,
  DebugElement,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  flush,
  tick,
  waitForAsync,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatTimepickerModule } from './timepicker.module';
import { MatNativeDateTimeModule } from './adapter';
import { MatTimeInput } from './time-inputs';

function createComponent(): ComponentFixture<StandardTimeInputs> {
  TestBed.configureTestingModule({
    imports: [
      MatTimepickerModule,
      MatNativeDateTimeModule,
      NoopAnimationsModule,
    ],
    declarations: [StandardTimeInputs],
  });

  return TestBed.createComponent(StandardTimeInputs);
}

describe('MatInputs', () => {
  let fixture: ComponentFixture<StandardTimeInputs>;
  let testComponent: StandardTimeInputs;
  let hostElement: HTMLElement;
  // let timeInputElements: DebugElement[];
  let hourInput: HTMLInputElement;
  let minuteInput: HTMLInputElement;

  beforeEach(waitForAsync(() => {
    fixture = createComponent();
    fixture.detectChanges();
    testComponent = fixture.componentInstance;
    hostElement = fixture.nativeElement;
    const timeInputElements =
      hostElement.querySelectorAll<HTMLInputElement>('.mat-time-input');
    hourInput = timeInputElements[0];
    minuteInput = timeInputElements[1];

    spyOn(testComponent, 'onSelect');
  }));

  it('should render default time inputs', () => {
    const container = fixture.debugElement.query(By.css('.mat-time-inputs'));

    expect(container).not.toBeNull();
    expect(
      container.query(By.css('.mat-timepicker-content-layout-hours'))
    ).not.toBeNull();
    expect(
      container.query(By.css('.mat-timepicker-content-layout-minutes'))
    ).not.toBeNull();
    expect(container.queryAll(By.css('.mat-time-inputs-field')).length).toBe(2);
  });

  it('should set default values as now', () => {
    expect(Number(hourInput.value)).toBe(new Date().getHours());
    expect(Number(minuteInput.value)).toBe(new Date().getMinutes());
    expect(testComponent.onSelect).not.toHaveBeenCalled();
  });

  // TODO: doesn't work
  xit('should set correct min and max values for inputs', () => {
    const inputDirectives = fixture.debugElement.queryAll(
      By.directive(MatTimeInput)
    );
    const hourDirective = inputDirectives[0].componentInstance as MatTimeInput;
    const minuteDirective = inputDirectives[0]
      .componentInstance as MatTimeInput;

    expect(hourDirective.min).toBe(0);
    expect(hourDirective.max).toBe(23);
    expect(minuteDirective.min).toBe(0);
    expect(minuteDirective.max).toBe(59);

    testComponent.isMeridiem = true;
    fixture.detectChanges();

    expect(hourDirective.min).toBe(1);
    expect(hourDirective.max).toBe(12);
    expect(minuteDirective.min).toBe(0);
    expect(minuteDirective.max).toBe(59);
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

  it('should set placeholder as previous value after focus', () => {
    testComponent.selected = new Date(2023, 4, 19, 21, 45);
    fixture.detectChanges();

    expect(Number(hourInput.value)).toBe(21);
    expect(Number(minuteInput.value)).toBe(45);

    dispatchInputEvent(hourInput, 'focus');
    dispatchInputEvent(minuteInput, 'focus');

    expect(Number(hourInput.value)).toBe(0);
    expect(Number(minuteInput.value)).toBe(0);
    expect(hourInput.placeholder).toBe('21');
    expect(minuteInput.placeholder).toBe('45');
  });

  it('should keep the same value after focus and blur inputs', () => {
    testComponent.selected = new Date(2023, 4, 19, 21, 45);
    fixture.detectChanges();

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
  });

  it('should emit time change event when value has been changed', () => {
    testComponent.selected = new Date(2023, 4, 19, 21, 45);
    fixture.detectChanges();

    dispatchInputEvent(hourInput, 'focus');
    hourInput.value = '14';
    fixture.detectChanges();
    dispatchInputEvent(hourInput, 'blur');

    expect(testComponent.onSelect).toHaveBeenCalledOnceWith(
      new Date(2023, 4, 19, 14, 45)
    );

    dispatchInputEvent(minuteInput, 'focus');
    minuteInput.value = '32';
    fixture.detectChanges();
    dispatchInputEvent(minuteInput, 'blur');

    expect(testComponent.onSelect).toHaveBeenCalledWith(
      new Date(2023, 4, 19, 21, 32)
    );
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

  it('should change hour to 12 if consumer enter hour as 0 and meridiem is true', () => {
    testComponent.isMeridiem = true;
    hourInput.value = '0';
    fixture.detectChanges();
    dispatchInputEvent(hourInput, 'blur');

    expect(Number(hourInput.value)).toBe(12);
  });

  it('should change hour to 12 if consumer enter hour as 24 and meridiem is true', () => {
    testComponent.isMeridiem = true;
    hourInput.value = '24';
    fixture.detectChanges();
    dispatchInputEvent(hourInput, 'blur');

    expect(Number(hourInput.value)).toBe(12);
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

    testComponent.isMeridiem = true;
    hourInput.value = '32';
    fixture.detectChanges();
    dispatchInputEvent(hourInput, 'blur');

    expect(Number(hourInput.value)).toBe(12);
  });

  it('should show time with zero prefix if value less than 10', () => {
    testComponent.selected = new Date(2023, 4, 19, 7, 2);
    fixture.detectChanges();

    expect(hourInput.value).toBe('07');
    expect(minuteInput.value).toBe('02');
  });
});

function dispatchInputEvent(input: HTMLInputElement, type: 'focus' | 'blur') {
  const event = new InputEvent(type);
  input.dispatchEvent(event);
}

@Component({
  template: `<mat-time-inputs
    [isMeridiem]="isMeridiem"
    [selected]="selected"
    (_userSelection)="onSelect($event)"
  ></mat-time-inputs>`,
})
class StandardTimeInputs {
  @ViewChildren(MatTimeInput) timeInputs: QueryList<MatTimeInput>;

  isMeridiem = false;
  selected: Date | null = null;
  onSelect(value: Date) {}
}
