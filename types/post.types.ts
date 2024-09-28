import { Comment } from "./comment.types";

export interface Post {
  id: number;
  user_id: number;
  user_name: string;
  created_at: string;
  image_url: string;
  likes: number;
  description: string;
  isLiked: boolean;
  comments: Comment[];
}
