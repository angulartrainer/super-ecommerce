import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBannerComponent } from './main-banner.component';

describe('MainBannerComponent', () => {
  let component: MainBannerComponent;
  let fixture: ComponentFixture<MainBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MainBannerComponent]
    });
    fixture = TestBed.createComponent(MainBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
