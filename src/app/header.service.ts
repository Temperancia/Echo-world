import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
@Injectable()
export class HeaderService {
  public show = {
    'home': {
      'postBoxButton': true,
      'trendyFluxButton': true,
      'friendsFluxButton': true
    },
    'my-profile': {
      'postBoxButton': true,
      'trendyFluxButton': false,
      'friendsFluxButton': false
    }
  };
  constructor(private location: Location) { }
  getDisplayed(): Observable<Object> {
    
    const url = location.pathname.substr(1);
    return of(this.show[url]);
  }
  
}
