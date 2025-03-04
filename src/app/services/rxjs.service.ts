import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RxjsService {
  http = inject(HttpClient);
  constructor() {}

  private GITHUB_API = 'https://api.github.com/search/users?q=';

  searchUsers(query: string): Observable<any> {
    return this.http.get<any>(`${this.GITHUB_API}${query}`);
  }
}
