import { Injectable } from '@angular/core';
import { BehaviorSubject, switchMap, forkJoin } from 'rxjs';
import { IProduct } from 'src/interfaces/products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: BehaviorSubject<IProduct[]> = new BehaviorSubject<
    IProduct[]
  >([]);

  $products = this.products.asObservable();

  constructor(private _http: HttpClient) {}

  getProduct(id: string) {
    return this._http.get<IProduct>(`http://localhost:3000/products/${id}`);
  }

  getProducts() {
    // this._http.get('http://localhost:3000/products').pipe(
    //   switchMap((products) => {
    //     return this._http.get('http://localhost:3000/reviews');
    //   })
    // ).subscribe((reviews)=>{
    //     console.log(reviews);
    // })

    forkJoin([
      this._http.get('http://localhost:3000/reviews'),
      this._http.get('http://localhost:3000/products'),
    ]).subscribe((results) => {
      const [reviews, products] = results;
      this.products.next(products as IProduct[]);
    });

    // .subscribe({
    //   next: (response) => {
    //     this.products.next(response as IProduct[]);
    //   },
    //   error: () => {},
    // });
  }
}
