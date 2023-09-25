import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APIBase } from 'src/app/classes/APIBase';
import { HttpClient } from '@angular/common/http';
import { IDiscountedProduct } from 'src/interfaces/products';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'super-top-discounted',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './top-discounted.component.html',
  styleUrls: ['./top-discounted.component.scss'],
})
export class TopDiscountedComponent extends APIBase<IDiscountedProduct[]> {
  constructor(private _http: HttpClient) {
    super('http://localhost:3000/top-discounted', _http);
  }
}
