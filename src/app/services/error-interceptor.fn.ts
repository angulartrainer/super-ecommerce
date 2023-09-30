import {
  HttpErrorResponse,
  HttpHandler,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const ErrorInterceptor: HttpInterceptorFn = (
  request: HttpRequest<any>,
  next: HttpHandlerFn
) => {
  return next(request).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = 'API Error occurred';

      if (error.error instanceof ErrorEvent) {
        errorMessage = `API Error: ${error.error.message}`;
      } else {
        errorMessage = `API Error: ${error.status} with error message: ${error.message}`;
      }

      console.log(errorMessage);

      return throwError(() => new Error(errorMessage));
    })
  );
};
