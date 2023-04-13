import { Component, OnInit } from '@angular/core';
import { Post, PostDialogData, PostDialogMode } from '../../../shared/interfaces/post.interface';
import { PostService } from '../../services/post.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { PostDialogComponent } from '../post-dialog/post-dialog.component';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  posts$: Observable<Post[]>;
  constructor(private postService: PostService, public dialog: MatDialog) {}

  addPost(): void {
    const dialogRef = this.dialog.open(PostDialogComponent, {
      width: '750px',
      data: { title: 'Add New Post', mode: PostDialogMode.Add },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  editPost(post: Post): void {
    const dialogRef = this.dialog.open(PostDialogComponent, {
      width: '750px',
      data: { title: 'Edit Post', mode: PostDialogMode.Edit, post },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  deletePost(post: Post): void {
    console.log('deletePost: ' + post);
  }

  ngOnInit(): void {
    this.posts$ = this.postService.getPosts({ _limit: 20 });
  }

  public onScroll(): void {
    console.log('onScroll');
  }
}
