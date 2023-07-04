import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { forkJoin } from 'rxjs';

import {
  concatMap,
  map,
  mergeMap,
} from 'rxjs/operators';
import { Album } from './album.model';
import { AlbumService } from './album.service';
import { Photo } from './photo.model';
import { PhotoService } from './photo.service';
import { User } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  template: ` <p>View DevTools Console</p> `,
  styles: [],
})
export class AppComponent implements OnInit {
  photos: Photo[] = [];
  errorMessage?: string | null;
  constructor(
    private userService: UserService,
    private albumService: AlbumService,
    private photoService: PhotoService
  ) {}
  ngOnInit(): void {
    let user: User;
    this.userService
      .findByEmail('Lucio_Hettinger@annie.ca')
      .pipe(
        map((userData) => {
          user = new User(
            userData.id,
            userData.name,
            userData.username,
            userData.email,
            userData.phone,
            userData.website
          );
          return user;
        }),

        concatMap((user) => {
          return this.albumService.getAllByUser(user.id);
        }),
        map((albums) => {
          user.albums = albums;
          return albums;
        }),
        mergeMap((albums: Album[]) => {
          let photosByAlbum$ = albums.map((album: Album) => {
            return this.photoService.getAllByAlbum(album.id);
          });

          let photosByAlbum = forkJoin(photosByAlbum$);
          return photosByAlbum;
        }),
        map((photosByAlbum) => {
          console.log(photosByAlbum);
          photosByAlbum.forEach((photoCollection: Photo[]) => {
            photoCollection.forEach((photo: Photo) => {
              const albumIndex = user.albums.findIndex((album) => {
                return album.id == photo.albumId;
              });
              const currentAlbum = user.albums[albumIndex];
              if (!currentAlbum.photos) {
                currentAlbum.photos = [];
              }
              currentAlbum.photos.push(photo);
            });
          });

          return user;
        })
      )
      .subscribe((user) => console.log(user));
  }
}

// OR: http://localhost:3000/users/5?_embed=albums
// https://github.com/typicode/json-server#relationships
