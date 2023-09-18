import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TopNavigationComponent } from './shared/top-navigation/top-navigation.component';
import { MainBannerComponent } from './shared/main-banner/main-banner.component';
import { FeaturedProductsComponent } from './shared/featured-products/featured-products.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'super-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    TopNavigationComponent,
    MainBannerComponent,
    FeaturedProductsComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'super-ecommerce';

  bannerImage = "https://via.placeholder.com/1200x600";
  alttext = "This is the banner image."

}
