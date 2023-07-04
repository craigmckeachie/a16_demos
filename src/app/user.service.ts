import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, filter, first, map, take, tap } from 'rxjs/operators';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  // findByEmail(email: string): Observable<User | undefined> {
  //   return this.http.get<User | undefined>(`http://localhost:3000/users?email=${email}`).pipe(
  //     find((user) => user !== null),
  //     catchError((error: HttpErrorResponse) => {
  //       console.log(error);
  //       return throwError('An error occured loading the user.');
  //     })
  //   );
  // }

  findByEmail(email: string): Observable<User> {
    return this.http
      .get<User[]>(`http://localhost:3000/users?email=${email}`)
      .pipe(
        // tap(console.log),
        map((users) => {
          return users[0];
        }),
        catchError((error: HttpErrorResponse) => {
          console.log(error);
          return throwError('An error occured loading the user.');
        })
      );
  }
}
