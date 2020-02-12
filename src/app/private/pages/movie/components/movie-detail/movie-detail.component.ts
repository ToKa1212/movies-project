import {Component, DoCheck, OnInit} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {MovieItems} from '../../../../models/movieItems';


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
