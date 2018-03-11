import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
//import {TransferHttpCacheModule} from '@nguniversal/common';
import { FindHelpComponent } from './find-help/find-help.component';
import { FeedComponent } from './feed/feed.component';
import { FooterComponent } from './footer/footer.component';
import { PostService } from './post.service';
import { FriendService } from './friend.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    MyProfileComponent,
    FindHelpComponent,
    FeedComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'my-profile', component: MyProfileComponent },
      { path: 'help', component: FindHelpComponent },
    ]),
    //TransferHttpCacheModule,
  ],
  providers: [PostService, FriendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
