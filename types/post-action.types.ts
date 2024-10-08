import { UPDATE_POST_WITH_COMMENT } from "@/constants/comment.constants";
import {
  CREATE_POST_FAILURE,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  FETCH_LIKED_POSTS_FAILURE,
  FETCH_LIKED_POSTS_REQUEST,
  FETCH_LIKED_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  LIKE_POST_SUCCESS,
  REMOVE_FROM_LIKED_POSTS,
  UNLIKE_POST_SUCCESS,
} from "../constants/post.constants";
import { Post } from "./post.types";
import { Comment } from "./comment.types";

export type PostAction =
  | { type: typeof FETCH_POSTS_REQUEST }
  | { type: typeof CREATE_POST_REQUEST }
  | { type: typeof FETCH_LIKED_POSTS_REQUEST }
  | { type: typeof FETCH_POSTS_SUCCESS; payload: Post[] }
  | { type: typeof CREATE_POST_SUCCESS; payload: Post }
  | { type: typeof FETCH_LIKED_POSTS_SUCCESS; payload: Post[] }
  | { type: typeof FETCH_POSTS_FAILURE; payload: string }
  | { type: typeof CREATE_POST_FAILURE; payload: string }
  | { type: typeof FETCH_LIKED_POSTS_FAILURE; payload: string }
  | { type: typeof LIKE_POST_SUCCESS; payload: Post }
  | { type: typeof UNLIKE_POST_SUCCESS; payload: Post }
  | { type: typeof REMOVE_FROM_LIKED_POSTS; payload: Post }
  | {
      type: typeof UPDATE_POST_WITH_COMMENT;
      payload: {
        postId: number;
        comment: Comment;
      };
    };
