import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Photo } from './photo';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Photo[]> {
    return this.http.get<Photo[]>('http://localhost:3000/photos/wrong').pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        return throwError(
          () => new Error('An error occured loading the photos.')
        );
      })
    );
  }
}
