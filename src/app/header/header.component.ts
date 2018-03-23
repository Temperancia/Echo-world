import { Component, OnInit, Input } from '@angular/core';
import {HeaderService} from '../header.service';
import {PostService} from '../post.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.pug',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() app: string;
  private showPost = false;
  private show;
  constructor(private headerService: HeaderService, private postService: PostService) {
  }
  ngOnInit() {
    this.headerService.getDisplayed().subscribe(show => this.show = show);
  }
  public showPostBox(): void {
    this.showPost = !this.showPost;
  }
  public showTrendingFlux(): void {
    this.postService.displayedFluxes.trending = !this.postService.displayedFluxes.trending;
  }
  public showFriendsFlux(): void {
    this.postService.displayedFluxes.friends = !this.postService.displayedFluxes.friends;
  }
}
