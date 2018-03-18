import {Component, OnInit} from '@angular/core';
import {Friend} from '../Friend';
import {FriendService} from '../friend.service';
@Component({
  selector: 'home-component',
  templateUrl: 'home.component.pug'
})
export class HomeComponent implements OnInit {
  private profile: boolean = false;
  private friendList: boolean = false;
  private friends: Friend[];
  constructor(private friendService: FriendService) {
    
  }
  ngOnInit() {
    this.friendService.getFriends()
      .subscribe(friends => this.friends = friends);
  }
  public getReputation(friend: Friend) {
    return friend.reputation >= 0 ? 'green' : 'red';
  }
}