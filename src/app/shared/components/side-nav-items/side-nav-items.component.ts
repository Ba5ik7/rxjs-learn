import { Component, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map, shareReplay } from 'rxjs';
import { SideNavItem } from '../../interfaces/side-nav-item';

@Component({
  selector: 'side-nav-items',
  templateUrl: './side-nav-items.component.html',
  styleUrls: ['./side-nav-items.component.scss']
})
export class SideNavComponent {
  
  currentURL

  @Input() sideNavItems: SideNavItem[] = [];

  constructor(private router: Router) {
    this.currentURL = router.events
    .pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event) => event.url),
      shareReplay({ bufferSize: 1, refCount: true })
    )
    // .subscribe((url) => {
    //   console.log('router', url);
    // });
  }
}
