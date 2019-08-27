import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MovieComponent} from './private/pages/movie/movie.component';
import {MusicComponent} from './private/pages/music/music.component';
import {PhotosComponent} from './private/pages/photos/photos.component';
import {DocumentsComponent} from './private/pages/documents/documents.component';

const routes: Routes = [
  {
    path: 'movie',
    component: MovieComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
