import {Component, OnInit} from '@angular/core';
import {NavigationItem} from './shared/models/navigation/navigationItem';
import {NavigationService} from './shared/services/navigation/navigation.service';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'mm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  navigationData: NavigationItem[];

  constructor(private navigationService: NavigationService,
              private translateService: TranslateService) {
  }

  ngOnInit() {
    this.translateService.addLangs(['en', 'de']);
    this.translateService.use('en');
    this.navigationData = this.navigationService.getNavigationItem();
  }
}

