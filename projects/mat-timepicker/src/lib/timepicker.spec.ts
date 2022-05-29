import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTimepicker } from './timepicker';

describe('MatTimepicker', () => {
  let component: MatTimepicker;
  let fixture: ComponentFixture<MatTimepicker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatTimepicker],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatTimepicker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
