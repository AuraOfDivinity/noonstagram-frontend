import {
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE,
} from "@/constants/comment.constants";
import { CommentActions } from "@/types/comment-action.types";
import { CommentState } from "@/types/comment-state.types";

const initialState: CommentState = {
  loading: false,
  error: null,
};

export const commentReducer = (
  state = initialState,
  action: CommentActions
): CommentState => {
  switch (action.type) {
    case ADD_COMMENT_REQUEST:
      return { ...state, loading: true, error: null };
    case ADD_COMMENT_SUCCESS:
      return { ...state, loading: false };
    case ADD_COMMENT_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
