import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideNavService {

  constructor() { }

  private isSideNavOpen: boolean = false;
  get issideNavOpen(): boolean {
    return this.isSideNavOpen;
  }

  private sideNavToggle: Subject<boolean> = new Subject();
  public sideNavToggle$: Observable<boolean> = this.sideNavToggle.asObservable();
  public toggleSideNav(): void {
    this.isSideNavOpen = !this.isSideNavOpen;
    this.sideNavToggle.next(this.issideNavOpen);
  }

  private sideNavOpen: Subject<boolean> = new Subject();
  public sideNavOpen$: Observable<boolean> = this.sideNavOpen.asObservable();
  public openSideNav(): void {
    this.isSideNavOpen = true;
    this.sideNavOpen.next(this.issideNavOpen);
  }

  private sideNavClose: Subject<boolean> = new Subject();
  public sideNavClose$: Observable<boolean> = this.sideNavClose.asObservable();
  public closeSideNav(): void {
    this.isSideNavOpen = false;
    this.sideNavClose.next(this.issideNavOpen);
  }

}
