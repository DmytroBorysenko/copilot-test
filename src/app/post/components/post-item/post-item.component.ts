import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../../../shared/interfaces/post.interface';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss'],
})
export class PostItemComponent implements OnInit {
  @Input() post: Post;
  @Output() editPost: EventEmitter<Post> = new EventEmitter<Post>();
  @Output() deletePost: EventEmitter<Post> = new EventEmitter<Post>();
  constructor() {}

  ngOnInit(): void {}

  onEditPost(post: Post): void {
    this.editPost.emit(post);
  }

  onDeletePost(post: Post): void {
    this.deletePost.emit(post);
  }
}
