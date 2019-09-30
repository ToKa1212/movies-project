import { Component, OnInit } from '@angular/core';
import {MoviesService} from "../../services/movies/movies.service";
import {MovieItems} from "../../models/movieItems";

@Component({
  selector: 'movie-page',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movies: MovieItems[] = [];

  constructor(private moviesService: MoviesService) {
    console.log('consgtructing');
  }

  ngOnInit() {
    const moviesObservable = this.moviesService.getMovies();
    moviesObservable.subscribe((movieData: MovieItems[]) => {
      console.log(movieData);
      this.movies = movieData;
    },
      error => console.log(error));
  }
}
