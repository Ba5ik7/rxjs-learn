import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Interfaces
import { SideNavItem } from '../interfaces/side-nav-item';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) { }

  get sideNavItems(): Observable<SideNavItem[]> {
    return this.httpClient.get<SideNavItem[]>('api/side-nav-items');
  }
}
