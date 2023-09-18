import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TopNavigationComponent } from './shared/top-navigation/top-navigation.component';
import { MainBannerComponent } from './shared/main-banner/main-banner.component';
import { FeaturedProductsComponent } from './shared/featured-products/featured-products.component';
import { FooterComponent } from './shared/footer/footer.component';
import { IProduct } from 'src/interfaces/products';
import { ProductService } from './services/product.service';

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
export class AppComponent implements OnInit {

  constructor(private _products : ProductService){
      
  }

  title = 'super-ecommerce';

  bannerImage = 'https://via.placeholder.com/1200x600';
  alttext = 'This is the banner image.';

  $products = this._products.$products

  headingClickHandler(event: any) {
    console.log(event);
    console.log('Heading Clicked');
    this.alttext = 'This is the new value';
  }

  ngOnInit(){
    this._products.getProducts();
  }
}
