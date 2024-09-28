import { Post } from "./post.types";

export interface PostState {
  posts: Post[];
  loading: boolean;
  error: string | null;
}
