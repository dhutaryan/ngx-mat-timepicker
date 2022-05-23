import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTimepickerComponent } from './mat-timepicker.component';

describe('MatTimepickerComponent', () => {
  let component: MatTimepickerComponent;
  let fixture: ComponentFixture<MatTimepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatTimepickerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatTimepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
