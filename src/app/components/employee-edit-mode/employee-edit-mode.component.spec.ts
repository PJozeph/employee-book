import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeEditModeComponent } from './employee-edit-mode.component';

describe('EmployeeEditModeComponent', () => {
  let component: EmployeeEditModeComponent;
  let fixture: ComponentFixture<EmployeeEditModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeEditModeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeEditModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
