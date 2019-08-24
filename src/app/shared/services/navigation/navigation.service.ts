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
      path: '/movie'
    },
    {
      title: 'Music',
      imgSrc: './assets/img/music.png',
      path: '/music'
    },
    {
      title: 'Photos',
      imgSrc: './assets/img/photos.png',
      path: '/photo'
    },
    {
      title: 'Documents',
      imgSrc: './assets/img/documents.png',
      path: '/document'
    }];

  constructor() {
  }

  getNavigationItem(): NavigationItem[] {
    return this.links;
  }
}
