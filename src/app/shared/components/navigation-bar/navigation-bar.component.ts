import { Component, OnInit } from '@angular/core';
import {NavigationService} from '../../services/navigation/navigation.service';
import {NavigationItem} from '../../models/navigation/navigationItem';

@Component({
  selector: 'navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  navigationData: NavigationItem[];

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
    this.navigationData = this.navigationService.getNavigationItem();
  }
}
