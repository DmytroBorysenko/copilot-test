import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostListComponent } from './components/post-list/post-list.component';
import { SharedModule } from '../shared/shared.module';
import { PostItemComponent } from './components/post-item/post-item.component';
import { PostDialogComponent } from './components/post-dialog/post-dialog.component';

@NgModule({
  declarations: [PostListComponent, PostItemComponent, PostDialogComponent],
  imports: [CommonModule, PostRoutingModule, SharedModule],
})
export class PostModule {}
