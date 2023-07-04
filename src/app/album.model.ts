import { Photo } from "./photo.model";

export class Album {
  userId: number = 0;
  id: number = 0;
  title: string = '';
  photos: Photo[] = [];
}
