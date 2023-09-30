import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/interfaces/products';
import { ButtonDemoDirective } from 'src/app/directives/button-demo.directive';
import { BarChartDirective } from 'src/app/directives/bar-chart.directive';
import { DataGridComponent } from 'src/app/shared/data-grid/data-grid.component';
import { UserTableDirective } from 'src/app/directives/user-table.directive';
import { FormsModule } from '@angular/forms';
import { FormatNumberPipe } from 'src/app/shared/format-number.pipe';

@Component({
  selector: 'super-product-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    ButtonDemoDirective,
    BarChartDirective,
    DataGridComponent,
    UserTableDirective,
    FormsModule,
    FormatNumberPipe
  ],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product!: IProduct;

  price = 0;

  data: number[] = [0, 0, 0];
  xaxis: string[] = ['abc', 'def', 'xyz'];

  constructor(
    private _route: ActivatedRoute,
    private _product: ProductService
  ) {}

  ngOnInit(): void {
    this._route.data.subscribe((data) => {
      this.product = data['product'];
    });

    // setInterval(()=>{
    //   const _data = [];
    //     for (let index = 0; index < 3; index++) {
    //       _data[index] = Math.round(Math.random() * 100);
    //     }
    //     this.data = _data;
    //     console.log(this.data);
    // }, 1000)

  }
}
