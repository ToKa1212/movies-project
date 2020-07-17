import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MusicComponent} from './pages/music/music.component';
import {MovieComponent} from './pages/movie/movie.component';
import {PhotosComponent} from './pages/photos/photos.component';
import {DocumentsComponent} from './pages/documents/documents.component';
import {SharedModule} from '../shared/shared.module';
import {TranslateModule} from '@ngx-translate/core';
import {MatButtonModule, MatChipsModule} from '@angular/material';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {DetailResolver} from './guard/detail.resolver';
import {CommonModule} from '@angular/common';
import {MatVideoModule} from 'mat-video';
import {MovieDetailComponent} from './pages/movie/components/movie-detail/movie-detail.component';
import {MoviesListComponent} from './pages/movie/components/movies-list/movies-list.component';
import {MovieItemComponent} from './pages/movie/components/movie-item/movie-item.component';
import {MovieSearchComponent} from './pages/movie/components/movie-search/movie-search.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";

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
    path: 'movies/:id',
    component: MovieDetailComponent,
    resolve: {
      movie: DetailResolver
    },
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
    PageNotFoundComponent,
    MovieSearchComponent
  ],
  imports: [
    SharedModule,
    TranslateModule,
    MatButtonModule,
    MatChipsModule,
    CommonModule,
    RouterModule.forChild(routes),
    MatVideoModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  exports: [
  ]
})

export class PrivateModule {
  constructor() {
  }
}
