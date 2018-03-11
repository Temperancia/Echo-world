import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
@Component({
  selector: 'app-feed',
  templateUrl: 'feed.component.pug',
  styleUrls: ['feed.component.scss']
})
export class FeedComponent implements OnInit {
  postTitle: string;
  postContent: string;
  posts: Post[] = [
    {id: 1, name: 'test', content: 'hello'},
    {id: 2, name: 'test', content: 'hello'},
    {id: 3, name: 'test', content: 'hello'},
    {id: 4, name: 'test', content: 'hello'},
  ];
  constructor() { }

  ngOnInit() {
  }
  post() {
    this.posts.unshift(new Post(this.posts.length, this.postTitle, this.postContent));
  }
  close(id) {
    for (let index = 0; index < this.posts.length; index++) {
      if (this.posts[index].id === id) {
        this.posts.splice(index, 1);
      }
    }
  }
}
