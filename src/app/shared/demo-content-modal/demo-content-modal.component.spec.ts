import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoContentModalComponent } from './demo-content-modal.component';

describe('DemoContentModalComponent', () => {
  let component: DemoContentModalComponent;
  let fixture: ComponentFixture<DemoContentModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DemoContentModalComponent]
    });
    fixture = TestBed.createComponent(DemoContentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
