import { ApplicationConfig, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { ErrorInterceptor } from './services/error-interceptor.fn';
import { TopDiscountedMockInterceptor } from './services/top-discounted-mock-interceptor.fn';
import { HttpLoggingInterceptor } from './services/http-logging-interceptor.fn';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([ HttpLoggingInterceptor, TopDiscountedMockInterceptor, ErrorInterceptor]),
      withInterceptorsFromDi()),
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'INR' },
    {
      provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true
    }
  ],
};
