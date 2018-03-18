import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.pug',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() app: string;
  constructor() {
  }

  ngOnInit() {
  }
  public showProfile() {
  }
}
