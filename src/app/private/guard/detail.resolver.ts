import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {MoviesService} from '../services/movies/movies.service';
import {Observable} from 'rxjs';
import {MovieItems} from '../models/movieItems';
import {catchError} from 'rxjs/operators';
import {of} from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class DetailResolver implements Resolve<MovieItems> {
  constructor(private movieService: MoviesService) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<MovieItems> | Promise<MovieItems> | any {
    const {id} = route.params;

    return this.movieService.getMovie(id).pipe(
      catchError(error => {
        return of(null);
      })
    );
  }
}
