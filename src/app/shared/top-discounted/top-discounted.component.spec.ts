import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDiscountedComponent } from './top-discounted.component';

describe('TopDiscountedComponent', () => {
  let component: TopDiscountedComponent;
  let fixture: ComponentFixture<TopDiscountedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TopDiscountedComponent]
    });
    fixture = TestBed.createComponent(TopDiscountedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
