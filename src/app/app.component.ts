import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { of } from 'rxjs';

import { concatMap, concatMapTo, first, map, tap } from 'rxjs/operators';
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
      .findByEmail('Sincere@april.biz')
      // .findByEmail('Lucio_Hettinger@annie.ca')
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
          // user = { ...userData } as User;
          return user;
        }),

        concatMap((user) => {
          return this.albumService.getAllByUser(user.id);
        }),
        map((albums) => {
          user.albums = albums;
          return albums;
        }),
        concatMap((albums) => {
          const albumId = albums[0].id;
          return this.photoService.getAllByAlbum(albumId);
        }),
        map((photos) => {
          user.albums[0].photos = photos;
          return user;
        })
      )
      .subscribe((user) => console.log(user));
  }
}

// OR: http://localhost:3000/users/5?_embed=albums
// https://github.com/typicode/json-server#relationships
