import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Album } from './album.model';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  constructor(private http: HttpClient) {}

  getAllByUser(userId: number): Observable<Album[]> {
    return this.http
      .get<Album[]>(`http://localhost:3000/users/${userId}/albums`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.log(error);
          return throwError('An error occured loading the albums.');
        })
      );
  }
}
