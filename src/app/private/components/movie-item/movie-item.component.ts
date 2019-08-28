import {Component, Input, OnInit} from '@angular/core';
import {MovieItems} from "../../models/movieItems";

@Component({
  selector: 'movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {
  @Input() movie: MovieItems;
  @Input() isShown: boolean;


  constructor() { }

  ngOnInit() {
  }

  hideContent() {
    this.isShown = !this.isShown;
  }
}
