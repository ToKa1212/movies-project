import {Component, Input, OnInit} from '@angular/core';
import {NavigationItem} from '../../models/navigation/navigationItem';
import {NavigationService} from '../../services/navigation/navigation.service';

@Component({
  selector: 'mm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navigationData: NavigationItem[];

  constructor(private navigationService: NavigationService) {
  }

  ngOnInit() {
    this.navigationData = this.navigationService.getNavigationItem();
  }
}
