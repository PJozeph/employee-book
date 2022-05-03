import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeViewModeComponent } from './employee-view-mode.component';

describe('EmployeeViewModeComponent', () => {
  let component: EmployeeViewModeComponent;
  let fixture: ComponentFixture<EmployeeViewModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeViewModeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeViewModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
