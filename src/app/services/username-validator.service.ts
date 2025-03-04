import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  Observable,
  of,
  switchMap,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsernameValidatorService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  http = inject(HttpClient);

  checkUsername(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.http.get<any[]>(this.apiUrl).pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((users) => {
          const usernameExits = users.some(
            (user) => user.username === control.value
          );
          return usernameExits ? of({ usernameTaken: true }) : of(null);
        })
      );
    };
  }
}
