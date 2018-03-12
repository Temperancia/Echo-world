import {Component, OnInit} from '@angular/core';
import {Friend} from '../friend';
import {FriendService} from '../friend.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.pug',
  styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {
  friends: Friend[];
  constructor(private friendService: FriendService) {
  }

  ngOnInit() {
    this.getFriends();
  }
  getFriends() {
    this.friendService.getFriends()
      .subscribe(friends => this.friends = friends);
  }
  getReputation(friend) {
    if (friend.reputation >= 0) {
      return 'green';
    }
    return 'red';
  }
}
