import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MusicComponent} from './pages/music/music.component';
import {MovieComponent} from './pages/movie/movie.component';
import {PhotosComponent} from './pages/photos/photos.component';
import {DocumentsComponent} from './pages/documents/documents.component';
import {BrowserModule} from '@angular/platform-browser';
import {SharedModule} from '../shared/shared.module';
import {MoviesListComponent} from './components/movies-list/movies-list.component';
import {MovieItemComponent} from './components/movie-item/movie-item.component';
import {TranslateModule} from '@ngx-translate/core';
import {MatButtonModule, MatChipsModule} from '@angular/material';
import {MovieDetailComponent} from './pages/movie-detail/movie-detail.component';
import {MoviesService} from './services/movies/movies.service';
import {MovieItems} from './models/movieItems';


const routes: Routes = [
  {
    component: MovieDetailComponent,
    pathMatch: 'guardians' || 'seven' || 'fight-club' || 'terminator' || 'office-space' || 'goodfellas' || 'cloverfield' || 'avatar' || 'alien' || 'the-thing' || 'it',
  }
];

@NgModule({
  declarations: [
    MusicComponent,
    MovieComponent,
    PhotosComponent,
    DocumentsComponent,
    MoviesListComponent,
    MovieItemComponent,
    MovieDetailComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    TranslateModule,
    MatButtonModule,
    MatChipsModule,
    RouterModule
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
