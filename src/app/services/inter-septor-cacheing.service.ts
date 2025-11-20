import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InterSeptorCacheingService {
  private cache = new Map<string, any>(); // store cached responses

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Only cache GET requests
    if (req.method !== 'GET') {
      return next.handle(req);
    }

    const url = req.urlWithParams;

    // -------- 1. Return cached response if available --------
    const cachedResponse = this.cache.get(url);
    if (cachedResponse) {
      return of(
        new HttpResponse({
          body: cachedResponse,
          status: 200,
        })
      );
    }

    // -------- 2. Make API call and store in cache --------
    return next.handle(req).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          this.cache.set(url, event.body);
        }
      })
    );
  }
}
