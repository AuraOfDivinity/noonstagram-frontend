import {
  ADD_COMMENT_FAILURE,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
} from "@/constants/comment.constants";

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

export type CommentActions =
  | AddCommentRequestAction
  | AddCommentSuccessAction
  | AddCommentFailureAction;
