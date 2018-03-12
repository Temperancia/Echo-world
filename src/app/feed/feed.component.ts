import { Component, OnInit } from '@angular/core';
import {Ng2EmojiService} from 'ng2-emoji';
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
  emojis: Array<string>;
  actualEmojis: Array<string>;
  onTitle: boolean;
  onContent: boolean;
  
  constructor(private postService: PostService) {
    this.emojis = this.actualEmojis = Ng2EmojiService.emojis;
    for (let emoji = 0; emoji < this.emojis.length; emoji++) {
      this.actualEmojis[emoji] = ':' + this.emojis[emoji] + ':';
    }
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
  addEmoji(emoji) {
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
