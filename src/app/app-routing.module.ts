import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MovieComponent} from './private/pages/movie/movie.component';
import {MusicComponent} from './private/pages/music/music.component';
import {PhotosComponent} from './private/pages/photos/photos.component';
import {DocumentsComponent} from './private/pages/documents/documents.component';
import {PageNotFoundComponent} from './private/pages/page-not-found/page-not-found.component';
import {MovieDetailComponent} from './private/pages/movie-detail/movie-detail.component';
import {DetailResolver} from './private/guard/detail.resolver';

const routes: Routes = [
  {
    path: 'movie',
    component: MovieComponent,
    data: {title: 'movie data'}
  },
  {
    path: 'music',
    component: MusicComponent
  },
  {
    path: 'photo',
    component: PhotosComponent
  },
  {
    path: 'document',
    component: DocumentsComponent
  },
  {
    component: MovieDetailComponent,
    resolve: {
      order: DetailResolver
    },
    path: 'detail/:id',
  },
  {
    path: '',
    redirectTo: 'movie',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
