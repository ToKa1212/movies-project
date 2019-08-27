import {Component, Input} from '@angular/core';
import {NavigationItem} from '../../models/navigation/navigationItem';

@Component({
  selector: 'navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {
  @Input() navigationData: NavigationItem[];
  constructor() {}
}
