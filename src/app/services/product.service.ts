import { Injectable } from '@angular/core';
import { IProduct } from 'src/interfaces/products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  products: IProduct[] = [
    {
      name: 'Macbook Pro',
      desc: 'Laptop',
      price: 100000,
    },
    {
      name: 'Macbook Pro 16',
      desc: 'Laptop',
      price: 140000,
    },
    {
      name: 'Macbook Pro 14',
      desc: 'Laptop',
      price: 150000,
    },
    {
      name: 'Macbook Air',
      desc: 'Laptop',
      price: 90000,
    },
  ];
}
