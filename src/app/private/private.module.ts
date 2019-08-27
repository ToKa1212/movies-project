import {NgModule} from '@angular/core';
import {Routes} from '@angular/router';
import {MusicComponent} from './pages/music/music.component';
import {MovieComponent} from './pages/movie/movie.component';
import {PhotosComponent} from './pages/photos/photos.component';
import {DocumentsComponent} from './pages/documents/documents.component';
import {BrowserModule} from '@angular/platform-browser';
import {SharedModule} from '../shared/shared.module';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';


const routes: Routes = [];

@NgModule({
  declarations: [
    MusicComponent,
    MovieComponent,
    PhotosComponent,
    DocumentsComponent,
    MoviesListComponent,
    MovieItemComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  exports: [
    MusicComponent,
    MovieComponent,
    PhotosComponent,
    DocumentsComponent
  ]
})
export class PrivateModule {
  constructor() {
  }
}
