import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, catchError, of, throwError } from 'rxjs';
import { IProduct } from 'src/interfaces/products';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class ProductResolverService
  implements Resolve<Observable<IProduct | null>>
{
  constructor(private _product: ProductService, private _router: Router) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<IProduct | null>
    | Observable<Observable<IProduct | null>>
    | Promise<Observable<IProduct | null>> {
    const { id } = route.params;
    return this._product.getProduct(id).pipe(
      catchError(() => {
        this._router.navigate(['not-found']);
        return of(null);
      })
    );
  }
}
