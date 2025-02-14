import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { catchError, debounceTime, Observable, of, switchMap } from 'rxjs';

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
        switchMap((users) => {
          console.log('helllo');
          const usernameExits = users.some(
            (user) => user.username === control.value
          );
          console.log(usernameExits);
          return usernameExits ? of({ usernameTaken: true }) : of(null);
        })
        // catchError(() => of(null))
      );
    };
  }
}
