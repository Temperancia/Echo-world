import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Post } from './post';

@Injectable()
export class PostService {
  private posts: Post[] = [
    {id: 1, name: 'test', content: 'hello'},
    {id: 2, name: 'test', content: 'hello'},
    {id: 3, name: 'test', content: 'hello'},
    {id: 4, name: 'test', content: 'hello'},
  ];
  constructor() { }
  getPosts(): Observable<Post[]> {
    return of(this.posts);
  }
  create(post: Post) {
    post.id = this.posts.length;
    this.posts.unshift(post);
  }
}
