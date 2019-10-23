import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MusicComponent} from './pages/music/music.component';
import {MovieComponent} from './pages/movie/movie.component';
import {PhotosComponent} from './pages/photos/photos.component';
import {DocumentsComponent} from './pages/documents/documents.component';
import {SharedModule} from '../shared/shared.module';
import {MoviesListComponent} from './components/movies-list/movies-list.component';
import {MovieItemComponent} from './components/movie-item/movie-item.component';
import {TranslateModule} from '@ngx-translate/core';
import {MatButtonModule, MatChipsModule} from '@angular/material';
import {MovieDetailComponent} from './pages/movie-detail/movie-detail.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {DetailResolver} from './guard/detail.resolver';
import {CommonModule} from '@angular/common';
import {MatVideoModule} from 'mat-video';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full'
  },
  {
    path: 'movies',
    component: MovieComponent,
    data: {title: 'movie data'}
  },
  {
    path: 'musics',
    component: MusicComponent
  },
  {
    path: 'photos',
    component: PhotosComponent
  },
  {
    path: 'documents',
    component: DocumentsComponent
  },
  {
    component: MovieDetailComponent,
    resolve: {
      movie: DetailResolver
    },
    path: 'movies/:id',
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
    PageNotFoundComponent
  ],
  imports: [
    SharedModule,
    TranslateModule,
    MatButtonModule,
    MatChipsModule,
    CommonModule,
    RouterModule.forChild(routes),
    MatVideoModule
  ],
  exports: [
  ]
})

export class PrivateModule {
  constructor() {
  }
}
