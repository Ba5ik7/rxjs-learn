import { Component, ViewChild } from '@angular/core';

import { MatSidenav } from '@angular/material/sidenav';
// Services
import { AppService } from './shared/services/app.service';
import { SideNavService } from './shared/services/side-nav.service';
// Interfaces
import { SideNavItem } from './shared/interfaces/side-nav-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // It is because TypeScript 2.7 includes a strict class checking where all
  // the properties should be initialized in the constructor. A workaround 
  // is to add the ! as a postfix to the variable name:
  @ViewChild('sidenav') sidenav!: MatSidenav;

  sideNavItems: SideNavItem[] = [];

  constructor(private appService: AppService, private sideNavService: SideNavService) {
    appService.sideNavItems.subscribe((data) => this.sideNavItems = data);

    this.sideNavService.sideNavToggle$.subscribe(() => this.sidenav.toggle());
    this.sideNavService.sideNavOpen$.subscribe(() => this.sidenav.open());
    this.sideNavService.sideNavClose$.subscribe(() => this.sidenav.close());
  }

  sideNavToggle() {
    this.sideNavService.toggleSideNav();
  }

}
