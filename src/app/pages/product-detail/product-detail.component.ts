import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterLink, RouterOutlet } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/interfaces/products';
import { ButtonDemoDirective } from 'src/app/directives/button-demo.directive';
import { BarChartDirective } from 'src/app/directives/bar-chart.directive';

@Component({
  selector: 'super-product-detail',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, ButtonDemoDirective, BarChartDirective],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product!: IProduct;

  constructor(
    private _route: ActivatedRoute,
    private _product: ProductService
  ) {
  
  }

  ngOnInit(): void {
    this._route.data.subscribe((data) => {
      this.product = data['product'];
    });
  }
}
