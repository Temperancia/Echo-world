import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-feed',
  templateUrl: 'feed.component.pug',
  styleUrls: ['feed.component.scss']
})
export class FeedComponent implements OnInit {
  currentPost: Post;
  posts: Post[];
  onTitle: boolean;
  onContent: boolean;
  
  constructor(private postService: PostService) {
    
  }
  ngOnInit() {
    this.currentPost = {
      id: -1,
      name: '',
      content: ''
    };
    this.postService.getPosts()
      .subscribe(posts => this.posts = posts);
  }
  selectTitle() {
    this.onTitle = true;
    this.onContent = false;
  }
  selectContent() {
    this.onTitle = false;
    this.onContent = true;
  }
  onEmoji(emoji) {
    console.log("ok");
    if (this.onTitle) {
      this.currentPost.name += emoji;
    } else if (this.onContent) {
      this.currentPost.content += emoji;
    }
  }
  post() {
    this.postService.create(this.currentPost);
  }
  close(id) {
    for (let index = 0; index < this.posts.length; index++) {
      if (this.posts[index].id === id) {
        this.posts.splice(index, 1);
      }
    }
  }
}
