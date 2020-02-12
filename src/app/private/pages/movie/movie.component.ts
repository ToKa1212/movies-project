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
  data;

  constructor(private moviesService: MoviesService) {
  }

  ngOnInit() {
    this.moviesService.getMisoHello().subscribe((data) => {
      if (data) {
        console.log(this.data, 'pice');
      }
    });
    const moviesObservable = this.moviesService.getMovies();
    moviesObservable.subscribe((movieData: MovieItems[]) => {
      this.movies = movieData;
    },
      error => console.log(error));
  }
}
