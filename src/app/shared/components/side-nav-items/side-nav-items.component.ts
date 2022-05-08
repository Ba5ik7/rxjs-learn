import { Component, Input } from '@angular/core';
import { SideNavItem } from '../../interfaces/side-nav-item';
import { SideNavService } from '../../services/side-nav.service';

@Component({
  selector: 'side-nav-items',
  templateUrl: './side-nav-items.component.html',
  styleUrls: ['./side-nav-items.component.scss']
})
export class SideNavComponent {

  @Input() sideNavItems: SideNavItem[] = [];

  constructor(private sideNavService: SideNavService) {

  }

}
