import {
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  LIKE_POST_SUCCESS,
} from "../constants/post.constants";
import { Post } from "./post.types";

export type PostAction =
  | { type: typeof FETCH_POSTS_REQUEST }
  | { type: typeof FETCH_POSTS_SUCCESS; payload: Post[] }
  | { type: typeof FETCH_POSTS_FAILURE; payload: string }
  | { type: typeof LIKE_POST_SUCCESS; payload: Post };
