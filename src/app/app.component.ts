import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Photo } from './photo';
import { PhotoService } from './photo.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>Photos</h1>
    <p *ngIf="errorMessage">{{ errorMessage }}</p>
    <div *ngFor="let photo of photos">
      <img [src]="photo.thumbnailUrl" [alt]="photo.title" />
      <p>{{ photo.title }}</p>
    </div>
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  photos: Photo[] = [];
  errorMessage?: string | null;
  constructor(private photoService: PhotoService) {}
  ngOnInit(): void {
    let observer = {
      next: (data) => (this.photos = data),
      error: (error) => (this.errorMessage = error),
    };

    this.photoService.getAll().subscribe(observer);
  }
}
