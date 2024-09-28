import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  LIKE_POST_SUCCESS,
} from "@/constants/post.constants";
import { PostAction } from "@/types/post-action.types";
import { PostState } from "@/types/post-state.types";

const initialState: PostState = {
  posts: [],
  loading: false,
  error: null,
};

export const postReducer = (
  state = initialState,
  action: PostAction
): PostState => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return { ...state, loading: true };
    case FETCH_POSTS_SUCCESS:
      return { ...state, loading: false, posts: action.payload };
    case FETCH_POSTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case LIKE_POST_SUCCESS:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload.id ? action.payload : post
        ),
      };
    default:
      return state;
  }
};
