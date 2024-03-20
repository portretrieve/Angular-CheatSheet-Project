import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable()
export class JustAnotherInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    //Adding Another header to request
    const modifiedRequest = request.clone({
      setHeaders: { Another_Randon_Header: 'From Another Intercepter' },
    });

    // Modified Request now moves on to another Interceptor if any or goes on to backend and get the response Observable
    //Here We are Handling Response and modifying it as well
    return next.handle(modifiedRequest).pipe(
      map((event) => {
        console.log(event);
        return event;
      })
    );
  }
}
