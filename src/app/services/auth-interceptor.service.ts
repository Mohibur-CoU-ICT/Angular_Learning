import {
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export class AuthInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let modifiedRequest = req.clone({
      headers: req.headers.append('auth', 'abc'),
      params: req.params.append('hai', 'hello world'),
    });
    return next.handle(modifiedRequest).pipe(
      tap((event) => {
        console.log('Response from http interceptor');
        console.log(event);
        if (event.type === HttpEventType.Response) {
          console.log(event.body);
        }
      })
    );
  }
}
