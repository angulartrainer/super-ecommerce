import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopDiscountedComponent } from 'src/app/shared/top-discounted/top-discounted.component';
import { TopSellersComponent } from 'src/app/shared/top-sellers/top-sellers.component';
import { FeaturedProductsComponent } from 'src/app/shared/featured-products/featured-products.component';
import { MainBannerComponent } from 'src/app/shared/main-banner/main-banner.component';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'super-home',
  standalone: true,
  imports: [
    CommonModule,
    TopDiscountedComponent,
    TopSellersComponent,
    FeaturedProductsComponent,
    MainBannerComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private _products: ProductService) {}

  title = 'super-ecommerce';

  bannerImage = 'https://via.placeholder.com/1200x600';
  alttext = 'This is the banner image.';

  $products = this._products.$products;

  headingClickHandler(event: any) {
    console.log(event);
    console.log('Heading Clicked');
    this.alttext = 'This is the new value';
  }

  ngOnInit() {
    this._products.getProducts();
  }
}
