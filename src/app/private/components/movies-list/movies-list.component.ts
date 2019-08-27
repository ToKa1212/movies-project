import {Component, Input, OnInit} from '@angular/core';
import {MovieItems} from '../../models/movieItems';

@Component({
  selector: 'movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  movies: MovieItems[];
  isShown: boolean;

  constructor() {
  }

  @Input('movies') movieData: MovieItems[];

  ngOnInit() {
  }

  hideContent() {
    this.isShown = !this.isShown;
  }
}
