import { Component, OnInit, Input } from '@angular/core';
import {HeaderService} from '../header.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.pug',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() app: string;
  private showPost = false;
  constructor(private headerService: HeaderService) {
  }
  ngOnInit() {
  }
  public showPostBox(): void {
    this.showPost = !this.showPost;
  }
}
