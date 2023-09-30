import {
  HttpErrorResponse,
  HttpHandler,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { of } from 'rxjs';

export const TopDiscountedMockInterceptor: HttpInterceptorFn = (
  request: HttpRequest<any>,
  next: HttpHandlerFn
) => {

  if(request.url.endsWith("/top-discounted")) {
      return of(
        new HttpResponse({
          status: 200,
          body: [
            {
              "name": "Macbook Pro",
              "desc": "Laptop",
              "price": 100000,
              "id": 1
            },
            {
              "name": "Macbook Pro 16",
              "desc": "Laptop",
              "price": 140000,
              "id": 2
            },
            {
              "name": "Macbook Pro 14",
              "desc": "Laptop",
              "price": 150000,
              "id": 3
            },
            {
              "name": "Macbook Air",
              "desc": "Laptop",
              "price": 90000,
              "id": 4
            }
          ]
        })
      )
  }

  return next(request);

  // return next(request).pipe(
  //   catchError((error: HttpErrorResponse) => {
  //     let errorMessage = 'API Error occurred';

  //     if (error.error instanceof ErrorEvent) {
  //       errorMessage = `API Error: ${error.error.message}`;
  //     } else {
  //       errorMessage = `API Error: ${error.status} with error message: ${error.message}`;
  //     }

  //     console.log(errorMessage);

  //     return throwError(() => new Error(errorMessage));
  //   })
  // );
};
