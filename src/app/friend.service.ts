import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Friend } from './friend';

@Injectable()
export class FriendService {
  friends: Friend[] = [
    {name: 'Nadir', reputation: 23},
    {name: 'Bruno', reputation: 9000},
    {name: 'James', reputation: -42}
  ];
  constructor() { }
  getFriends(): Observable<Friend[]> {
    return of(this.friends);
  }
}
