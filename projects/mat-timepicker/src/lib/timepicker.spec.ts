import { ESCAPE } from '@angular/cdk/keycodes';
import { Component, ViewChild } from '@angular/core';
import {
  ComponentFixture,
  fakeAsync,
  flush,
  TestBed,
  tick,
} from '@angular/core/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatTimepicker } from './timepicker';
import { TimepickerOpenAs } from './timepicker-base';
import { MatTimepickerModule } from './timepicker.module';

describe('MatTimepicker', () => {
  describe('standard timepicker', () => {
    let fixture: ComponentFixture<StandardTimepicker>;
    let testComponent: StandardTimepicker;

    beforeEach(fakeAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          MatTimepickerModule,
          MatFormFieldModule,
          MatInputModule,
          NoopAnimationsModule,
        ],
        declarations: [StandardTimepicker],
      });

      fixture = TestBed.createComponent(StandardTimepicker);
      fixture.detectChanges();

      testComponent = fixture.componentInstance;
    }));

    afterEach(fakeAsync(() => {
      testComponent.timepicker.close();
      fixture.detectChanges();
      flush();
    }));

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

      expect(document.querySelectorAll('.mat-timpicker-dialog').length).toBe(0);

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

      expect(document.querySelector('.mat-timepicker-content')).not.toBeNull();

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
  });
});

@Component({
  template: `
    <input [matTimepicker]="timepicker" />
    <mat-timepicker
      #timepicker
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
  @ViewChild('timepicker') timepicker: MatTimepicker;
}
