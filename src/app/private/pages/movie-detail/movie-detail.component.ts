import {Component, DoCheck, OnInit} from '@angular/core';
import {MoviesService} from '../../services/movies/movies.service';
import {MovieItems} from '../../models/movieItems';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/internal/operators/switchMap';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie: MovieItems;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    const {movie} = this.route.snapshot.data;
    console.log(this.route.snapshot.data);
    this.movie = movie;
  }
}
