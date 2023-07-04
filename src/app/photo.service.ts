import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, concat } from 'rxjs';
import { retry, retryWhen, delay, take, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Photo } from './photo';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Photo[]> {
    return this.http.get<Photo[]>('http://localhost:3000/photos').pipe(
      // retry(3)
      retryWhen((error) => {
        return error.pipe(
          delay(5000),
          take(5),
          // tap(() => console.log(error)),
          (o) => concat(o, throwError('An error occurred loading the photos.'))
        );
      })
    );
  }
}

// Reference: https://stackoverflow.com/questions/51566088/what-is-the-correct-way-to-use-concat-along-with-pipe-in-rxjs-6
