export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface PostDialogData {
  title: string;
  mode: PostDialogMode;
  post?: Post;
}

export enum PostDialogMode {
  Add = 'add',
  Edit = 'edit',
}
