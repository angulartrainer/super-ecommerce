import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/interfaces/products';

@Component({
  selector: 'super-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product!: IProduct;

  constructor(
    private _route: ActivatedRoute,
    private _product: ProductService
  ) {}

  ngOnInit(): void {
    this._route.data.subscribe((data) => {
      this.product = data['product'];
    });
  }
}
