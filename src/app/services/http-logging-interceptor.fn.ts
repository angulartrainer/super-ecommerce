import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { catchError, tap, throwError } from 'rxjs';

export const HttpLoggingInterceptor: HttpInterceptorFn = (
  request: HttpRequest<any>,
  next: HttpHandlerFn
) => {

  console.log(console.log(`Request: ${request.url}`))
  
  return next(request).pipe(tap((event: HttpEvent<any>)=>{
      if(event instanceof HttpResponse) {
        console.log(`Response: ${event}`);
      }
  }))

};
