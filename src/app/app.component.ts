import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TopNavigationComponent } from './shared/top-navigation/top-navigation.component';
import { MainBannerComponent } from './shared/main-banner/main-banner.component';
import { FeaturedProductsComponent } from './shared/featured-products/featured-products.component';
import { FooterComponent } from './shared/footer/footer.component';
import { IProduct } from 'src/interfaces/products';
import { ProductService } from './services/product.service';
import { TopSellersComponent } from './shared/top-sellers/top-sellers.component';
import { TopDiscountedComponent } from './shared/top-discounted/top-discounted.component';
import { UserService } from './services/user.service';
import { IUser } from 'src/interfaces/user';
import { Observable } from 'rxjs';

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
    TopSellersComponent,
    TopDiscountedComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  user$!: Observable<IUser | null>;

  constructor(private _user: UserService) {
    this.user$ = _user.user$;
  }
}
