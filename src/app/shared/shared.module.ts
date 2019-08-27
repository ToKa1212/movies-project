import { NgModule } from '@angular/core';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {NavigationBarComponent} from './components/navigation-bar/navigation-bar.component';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavigationBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavigationBarComponent,
  ]
})
export class SharedModule {}
