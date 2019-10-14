import { NgModule } from '@angular/core';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {NavigationBarComponent} from './components/navigation-bar/navigation-bar.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MatVideoComponent} from 'mat-video/app/video/video.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavigationBarComponent
  ],
  imports: [
    RouterModule,
    FormsModule,
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavigationBarComponent
  ]
})
export class SharedModule {}
