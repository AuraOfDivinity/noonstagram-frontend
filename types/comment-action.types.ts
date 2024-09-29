import {
  ADD_COMMENT_FAILURE,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  UPDATE_POST_WITH_COMMENT,
} from "@/constants/comment.constants";
import { Comment } from "./comment.types";

// src/types/comment-action.types.ts
export interface AddCommentRequestAction {
  type: typeof ADD_COMMENT_REQUEST;
}

export interface AddCommentSuccessAction {
  type: typeof ADD_COMMENT_SUCCESS;
  payload: {
    comment: {
      id: string;
      text: string;
      created_at: string;
      user_name: string;
    };
  };
}

export interface AddCommentFailureAction {
  type: typeof ADD_COMMENT_FAILURE;
  payload: string;
}

export interface UpdatePostWithCommentAction {
  type: typeof UPDATE_POST_WITH_COMMENT;
  payload: {
    postId: number;
    comment: Comment;
  };
}

export type CommentActions =
  | AddCommentRequestAction
  | AddCommentSuccessAction
  | AddCommentFailureAction
  | UpdatePostWithCommentAction;
