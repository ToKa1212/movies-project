import {Injectable} from '@angular/core';
import {MovieItems} from '../../models/movieItems';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private movies: MovieItems[] = [
    {
      title: 'Guardians of the Galaxy',
      id: 0,
      year: '2014',
      rated: 8.1,
      imgUrl: './../assets/img/movies/guardians-img.png',
      releasedDate: new Date(2014, 6, 31),
      runtime: '121 min',
      director: 'James Gunn',
      genre: 'Action',
      actresses: [
        {
          firstName: 'Chris',
          lastName: 'Pratt'
        },
        {
          firstName: 'Zoe',
          lastName: 'Saldana'
        },
        {
          firstName: 'Dave',
          lastName: 'Bautista'
        },
        {
          firstName: 'Vin',
          lastName: 'Diesel'
        }]
    },
    {
      title: 'Seven',
      id: 1,
      year: '1995',
      rated: 8.6,
      imgUrl: './../assets/img/movies/seven-img.png',
      releasedDate: new Date(1996, 0, 5),
      runtime: '127 min',
      director: 'David Fincher',
      genre: 'Thriller',
      actresses: [
        {
          firstName: 'Morgan',
          lastName: 'Freeman'
        },
        {
          firstName: 'Brad',
          lastName: 'Pitt'
        },
        {
          firstName: 'Gwyneth',
          lastName: 'Paltrow'
        },
        {
          firstName: 'Daniel',
          lastName: 'Zacapa'
        }]
    },
    {
      title: 'Fight Club',
      id: 2,
      year: '1999',
      rated: 8.8,
      imgUrl: './../assets/img/movies/fightClub-img.png',
      releasedDate: new Date(2018, 10, 12),
      runtime: '139 min',
      director: 'David Fincher',
      genre: 'Drama',
      actresses: [
        {
          firstName: 'Edward',
          lastName: 'Norton'
        },
        {
          firstName: 'Brad',
          lastName: 'Pitt'
        },
        {
          firstName: 'Helena',
          lastName: 'Carter'
        },
        {
          firstName: 'Meat',
          lastName: 'Loaf'
        }]
    },
    {
      title: 'Terminator 2: Judgment Day',
      id: 3,
      year: '1991',
      rated: 8.5,
      imgUrl: './../assets/img/movies/terminator2-img.png',
      releasedDate: new Date(1991, 7, 16),
      runtime: '137 min',
      director: ' James Cameron',
      genre: 'Action',
      actresses: [
        {
          firstName: 'Arnold',
          lastName: 'Schwarzenegger'
        },
        {
          firstName: 'Linda',
          lastName: 'Hamilton'
        },
        {
          firstName: 'Edward',
          lastName: 'Furlong'
        },
        {
          firstName: 'Robert ',
          lastName: 'Patrick'
        }]
    },
    {
      title: 'Office Space',
      id: 4,
      year: '1999',
      rated: 7.7,
      imgUrl: './../assets/img/movies/officeSpace-img.png',
      releasedDate: new Date(1999, 1, 19),
      runtime: '89 min',
      director: ' Mike Judge',
      genre: 'Comedy',
      actresses: [
        {
          firstName: 'Ron',
          lastName: 'Livingston'
        },
        {
          firstName: 'Jennifer',
          lastName: 'Aniston'
        },
        {
          firstName: 'David',
          lastName: 'Herman'
        },
        {
          firstName: 'Diedrich',
          lastName: 'Bader'
        }]
    },
    {
      title: 'Goodfellas',
      id: 5,
      year: '1990',
      rated: 8.7,
      imgUrl: './../assets/img/movies/goodfellas-img.png',
      releasedDate: new Date(1990, 9, 26),
      runtime: '146 min',
      director: 'Martin Scorsese',
      genre: 'Drama',
      actresses: [
        {
          firstName: 'Robert',
          lastName: 'De Niro'
        },
        {
          firstName: 'Ray',
          lastName: 'Liotta'
        },
        {
          firstName: 'Joe',
          lastName: 'Pesci'
        },
        {
          firstName: 'Paul',
          lastName: 'Sorvino'
        }]
    },
    {
      title: 'Cloverfield',
      id: 6,
      year: '2008',
      rated: 7.0,
      imgUrl: './../assets/img/movies/cloverfield-img.png',
      releasedDate: new Date(2008, 1, 1),
      runtime: '85 min',
      director: 'Matt Reeves',
      genre: 'Horror',
      actresses: [
        {
          firstName: 'Lizzy',
          lastName: 'Caplan'
        },
        {
          firstName: 'Jessica',
          lastName: 'Lucas'
        },
        {
          firstName: 'T.J.',
          lastName: 'Miller'
        },
        {
          firstName: 'Mike',
          lastName: 'Vogel'
        }]
    },
    {
      title: 'Avatar',
      id: 7,
      year: '2009',
      rated: 7.8,
      imgUrl: './../assets/img/movies/avatar-img.png',
      releasedDate: new Date(2009, 11, 17),
      runtime: '162 min',
      director: 'James Cameron',
      genre: 'Drama',
      actresses: [
        {
          firstName: 'Sam',
          lastName: 'Worthington'
        },
        {
          firstName: 'Zoe',
          lastName: 'Saldana'
        },
        {
          firstName: 'Sigourney',
          lastName: 'Weaver'
        },
        {
          firstName: 'Stephen',
          lastName: 'Lang'
        }]
    },
    {
      title: 'Alien',
      id: 8,
      year: '1979',
      rated: 8.4,
      imgUrl: './../assets/img/movies/alien-img.png',
      releasedDate: new Date(1979, 8, 6),
      runtime: '117 min',
      director: 'Ridley Scott',
      genre: 'Horror',
      actresses: [
        {
          firstName: 'Tom',
          lastName: 'Skerritt'
        },
        {
          firstName: 'Sigourney',
          lastName: 'Weaver'
        },
        {
          firstName: 'Veronica',
          lastName: 'Cartwright'
        },
        {
          firstName: 'John',
          lastName: 'Hurt'
        }]
    },
    {
      title: 'The Thing',
      id: 9,
      year: '1982',
      rated: 8.1,
      imgUrl: './../assets/img/movies/thing-img.png',
      releasedDate: new Date(1982, 7, 26),
      runtime: '127 min',
      director: 'John Carpenter',
      genre: 'Horror',
      actresses: [
        {
          firstName: 'Kurt',
          lastName: 'Russell'
        },
        {
          firstName: 'Wilford',
          lastName: 'Brimley'
        },
        {
          firstName: 'David',
          lastName: 'Clennon'
        },
        {
          firstName: 'Keith',
          lastName: 'David'
        }]
    },
    {
      title: 'It',
      id: 1,
      year: '2017',
      rated: 7.4,
      imgUrl: './../assets/img/movies/it-img.png',
      releasedDate: new Date(2017, 8, 8),
      runtime: '135 min',
      director: 'Andy Muschietti',
      genre: 'Horror',
      actresses: [
        {
          firstName: 'Jaeden',
          lastName: 'Martell'
        },
        {
          firstName: 'Sophia',
          lastName: 'Lillis'
        },
        {
          firstName: 'Finn',
          lastName: 'Wolfhard'
        },
        {
          firstName: 'Chosen',
          lastName: 'Jacobs'
        }]
    }];

  getMovies(): Observable<MovieItems[]> {
    return of (this.movies);
  }
  getMovie(id?: any): Observable<MovieItems> {
    console.log(id, this.movies);
    return of (this.movies.find(choosenMovie => String(choosenMovie.id) === id));
  }
}
