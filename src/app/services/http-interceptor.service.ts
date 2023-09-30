import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpInterceptorService implements HttpInterceptor {
  constructor() {
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = window.sessionStorage.getItem('access-token');

    if (token) {
      const clonedReq = req.clone({
        setHeaders: {
          Authorization: token,
        },
      });
      return next.handle(clonedReq);
    }

    return next.handle(req);
  }
}
