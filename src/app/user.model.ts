import { Album } from './album.model';

export class User {
  constructor(
    public id: number = 0,
    public name: string = '',
    public username: string = '',
    public email: string = '',
    public phone: string = '',
    public website: string = '',
    public albums: Album[] = []
  ) {}
}
