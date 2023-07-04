import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Photo } from './photo.model';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Photo[]> {
    return this.http.get<Photo[]>('http://localhost:3000/photos/').pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        return throwError('An error occured loading the photos.');
      })
    );
  }

  getAllByAlbum(albumId: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`http://localhost:3000/albums/${albumId}/photos/`).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        return throwError('An error occured loading the photos.');
      })
    );
  }
}

// Reference: https://stackoverflow.com/questions/51566088/what-is-the-correct-way-to-use-concat-along-with-pipe-in-rxjs-6
