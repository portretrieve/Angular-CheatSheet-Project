import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

// 1st Intercepter to intercept all the requests
@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    incomingRequest: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    //Retrieve and add the JWT Token with each request as Header
    let JWTToken = 'ABCDEF';

    const modifiedRequest = incomingRequest.clone({
      setHeaders: { MyToken: JWTToken },
    });

    // Modified Request now moves on to another Interceptor if any or goes on to backend and get the response Observable
    return next.handle(modifiedRequest);
  }
}
