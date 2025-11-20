import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CacheingService {
  private propertyCache: any[] | null = null;

  constructor(private http: HttpClient) {}

  getProperties(): Observable<any[]> {
    // Return cached data immediately
    if (this.propertyCache) {
      return of(this.propertyCache);
    }

    // Else make API call and store result using map
    return this.http.get<any[]>('/api/properties').pipe(
      map((res) => {
        this.propertyCache = res; // store in service variable
        return res; // pass data to component
      })
    );
  }

  clearCache() {
    this.propertyCache = null;
  }
}
