import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {debounceTime, distinctUntilChanged, filter} from 'rxjs/operators';
import {MoviesService} from '../../../../services/movies/movies.service';

@Component({
  selector: 'mm-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {
  searchControl = new FormControl('', Validators.maxLength(20));
  searchedMovie;

  constructor(private moviesService: MoviesService) {
  }


  ngOnInit() {
    this.searchedMovie = this.searchControl.valueChanges.pipe(
      filter(text => text.length >= 3),
      debounceTime(400),
      distinctUntilChanged()
    )
      .subscribe(value => {
        console.log(value, 'inside');
        this.moviesService.searchImdbMovie(value);
        console.log(value, 'outside');
      });
  }
}
