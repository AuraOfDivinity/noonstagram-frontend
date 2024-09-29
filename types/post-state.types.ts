import { Post } from "./post.types";

export interface PostState {
  posts: Post[];
  likedPosts: Post[];
  loading: boolean;
  error: string | null;
}
