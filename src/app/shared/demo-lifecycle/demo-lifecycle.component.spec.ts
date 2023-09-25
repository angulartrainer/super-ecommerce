import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoLifecycleComponent } from './demo-lifecycle.component';

describe('DemoLifecycleComponent', () => {
  let component: DemoLifecycleComponent;
  let fixture: ComponentFixture<DemoLifecycleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DemoLifecycleComponent]
    });
    fixture = TestBed.createComponent(DemoLifecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
