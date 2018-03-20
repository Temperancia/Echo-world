import { Component, OnInit } from '@angular/core';
import {Friend} from '../friend';
import {FriendService} from '../friend.service';
import {HeaderService} from '../header.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: 'my-profile.component.pug',
  styles: []
})
export class MyProfileComponent implements OnInit {
  private show;
  private friends: Friend[];
  constructor(private friendService: FriendService, private headerService: HeaderService) { }

  ngOnInit() {
    this.show = this.headerService.show;
    this.friendService.getFriends()
      .subscribe(friends => this.friends = friends);
  }
  public getReputation(friend: Friend): string {
    return friend.reputation >= 0 ? 'green' : 'red';
  }
  public getFeedClass(): string {
    if (this.show.profile && this.show.friendList) {
      return 'col-5';
    } else if (this.show.profile) {
      return 'col-8';
    } else if (this.show.friendList) {
      return 'col-9';
    }
    return 'col-12';
  }
}
