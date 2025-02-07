import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GenericService<T> {
  http: HttpClient = inject(HttpClient);

  get(url: string): Observable<T> {
    return this.http.get<T>(url);
  }
}
