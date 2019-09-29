import {MovieActresses} from './movieActors';

export interface MovieItems {
  title: string;
  year: string;
  rated: number;
  releasedDate?: Date;
  runtime: string;
  genre: string;
  director: string;
  imgUrl?: any;
  actresses: MovieActresses[];
  path?: string;
}
