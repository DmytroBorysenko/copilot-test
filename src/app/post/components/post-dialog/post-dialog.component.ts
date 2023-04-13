import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PostDialogData, PostDialogMode } from '../../../shared/interfaces/post.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-dialog',
  templateUrl: './post-dialog.component.html',
  styleUrls: ['./post-dialog.component.scss'],
})
export class PostDialogComponent implements OnInit {
  form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    body: new FormControl('', [Validators.required]),
  });
  constructor(@Inject(MAT_DIALOG_DATA) public data: PostDialogData) {}

  ngOnInit(): void {
    this.setFormValue(this.data.mode);
  }

  private setFormValue(mode: PostDialogMode): void {
    if (mode === PostDialogMode.Edit) {
      this.form.setValue({
        title: this.data.post ? this.data.post.title : '',
        body: this.data.post ? this.data.post.body : '',
      });
    }
  }
}
