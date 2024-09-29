import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  LIKE_POST_SUCCESS,
  FETCH_LIKED_POSTS_REQUEST,
  FETCH_LIKED_POSTS_SUCCESS,
  FETCH_LIKED_POSTS_FAILURE,
  UNLIKE_POST_SUCCESS,
  REMOVE_FROM_LIKED_POSTS,
} from "@/constants/post.constants";
import { UPDATE_POST_WITH_COMMENT } from "@/constants/comment.constants";
import { PostAction } from "@/types/post-action.types";
import { PostState } from "@/types/post-state.types";

const initialState: PostState = {
  posts: [],
  likedPosts: [], // Add a new array to hold liked posts
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
    case FETCH_LIKED_POSTS_REQUEST:
      return { ...state, loading: true };
    case FETCH_LIKED_POSTS_SUCCESS:
      return { ...state, loading: false, likedPosts: action.payload };
    case FETCH_LIKED_POSTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case UNLIKE_POST_SUCCESS:
      return {
        ...state,
        likedPosts: state.likedPosts.filter(
          (post) => post.id !== action.payload.id
        ),
      };
    case UPDATE_POST_WITH_COMMENT:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload.postId
            ? { ...post, comments: [...post.comments, action.payload.comment] }
            : post
        ),
      };
    case REMOVE_FROM_LIKED_POSTS:
      return {
        ...state,
        likedPosts: state.likedPosts.filter(
          (post) => post.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
