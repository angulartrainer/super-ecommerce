import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/interfaces/products';

@Component({
  selector: 'super-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent {
  product!: IProduct;

  constructor(
    private _route: ActivatedRoute,
    private _product: ProductService
  ) {
    _route.params.subscribe((params) => {
      const { id } = params;
      this._product.getProduct(id).subscribe((response: IProduct) => {
        this.product = response;
      });
    });
  }
}
