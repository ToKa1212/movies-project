import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {
  @Input() movie;
  @Input() isShown: boolean;


  constructor() { }

  ngOnInit() {
  }

  hideContent() {
    this.isShown = !this.isShown;
  }
}
