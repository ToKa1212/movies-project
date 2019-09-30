import {Injectable} from '@angular/core';
import {NavigationItem} from '../../models/navigation/navigationItem';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private links: NavigationItem[] = [
    {
      title: 'Movies',
      imgSrc: './assets/img/movie.png',
      path: 'private/movies'
    },
    {
      title: 'Music',
      imgSrc: './assets/img/music.png',
      path: 'private/musics'
    },
    {
      title: 'Photos',
      imgSrc: './assets/img/photos.png',
      path: 'private/photos'
    },
    {
      title: 'Documents',
      imgSrc: './assets/img/documents.png',
      path: 'private/documents'
    }];

  constructor() {
  }

  getNavigationItem(): NavigationItem[] {
    return this.links;
  }
}
