import {AfterViewInit, Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {fromEvent, Subject} from 'rxjs';
import {MoviesService} from '../../../shared/services/movies/movies.service';

@Component({
  selector: 'photos-page',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit, AfterViewInit {

  constructor(
    private movieService: MoviesService
  ) { }
  // @ViewChild('myButton') clickButton;
  myButton;
  rx = new Subject();
  newthing;


  @HostListener('document', ['mouseover'])
  moveOverButton() {
    console.log('over and over');

  }


  ngOnInit() {

  }

  ngAfterViewInit() {
    this.myButton = document.querySelector('button');
    this.rx.subscribe(() => console.log('button click'));

  }

  clickMe() {
    this.rx.next();
    this.movieService.getMovie().subscribe(
      res => console.log(res)
    );
  }
}
