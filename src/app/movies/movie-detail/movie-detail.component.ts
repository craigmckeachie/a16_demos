import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/movie.model';

@Component({
  selector: 'app-movie-detail',
  template: `
    <div *ngIf="movie">
      <h5>{{ movie.name }}</h5>
      <p>
        {{ movie.description }}
      </p>
    </div>
  `,
  styles: []
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;

  constructor() {}

  ngOnInit() {}
}
