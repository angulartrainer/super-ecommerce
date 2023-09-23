import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSellersComponent } from './top-sellers.component';

describe('TopSellersComponent', () => {
  let component: TopSellersComponent;
  let fixture: ComponentFixture<TopSellersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TopSellersComponent]
    });
    fixture = TestBed.createComponent(TopSellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
