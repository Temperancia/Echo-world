import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-feed',
  templateUrl: 'feed.component.pug',
  styleUrls: ['feed.component.scss']
})
export class FeedComponent implements OnInit {
  private currentPost: Post;
  private posts: Post[];
  private onTitle: boolean;
  private onContent: boolean;
  
  constructor(private postService: PostService) {
    
  }
  ngOnInit() {
    this.newPost();
    this.postService.getPosts()
      .subscribe(posts => this.posts = posts);
  }
  public selectTitle() {
    this.onTitle = true;
    this.onContent = false;
  }
  public selectContent() {
    this.onTitle = false;
    this.onContent = true;
  }
  public onEmoji(emoji) {
    if (this.onTitle) {
      this.currentPost.name += emoji;
    } else if (this.onContent) {
      this.currentPost.content += emoji;
    }
  }
  public newPost () {
    this.currentPost = {
      id: -1,
      name: '',
      content: ''
    };
  }
  public post() {
    this.postService.create(this.currentPost);
    this.newPost();
  }
  public close(id) {
    for (let index = 0; index < this.posts.length; index++) {
      if (this.posts[index].id === id) {
        this.posts.splice(index, 1);
      }
    }
  }
}
