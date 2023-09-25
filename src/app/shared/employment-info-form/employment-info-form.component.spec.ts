import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentInfoFormComponent } from './employment-info-form.component';

describe('EmploymentInfoFormComponent', () => {
  let component: EmploymentInfoFormComponent;
  let fixture: ComponentFixture<EmploymentInfoFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EmploymentInfoFormComponent]
    });
    fixture = TestBed.createComponent(EmploymentInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
