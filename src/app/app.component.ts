import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from './shared/services/app.service';

// Interfaces
import { SideNavItem } from './shared/interfaces/side-nav-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
  sideNavItems: SideNavItem[] = [];

  constructor(private appService: AppService) {
    appService.sideNavItems.subscribe((data) => this.sideNavItems = data);
  }

}
