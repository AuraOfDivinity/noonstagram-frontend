// src/store/actions/post.actions.ts
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  LIKE_POST_SUCCESS,
} from "@/constants/post.constants";
import axios from "axios";
import { Dispatch } from "redux";

export const fetchPosts = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: FETCH_POSTS_REQUEST });

    const { data } = await axios.get("/api/posts");

    dispatch({
      type: FETCH_POSTS_SUCCESS,
      payload: data.posts,
    });
  } catch (error) {
    dispatch({
      type: FETCH_POSTS_FAILURE,
      payload: error.message,
    });
  }
};

export const likePost = (postId: string) => async (dispatch: Dispatch) => {
  try {
    const { data } = await axios.post(`/api/posts/${postId}/like`);

    dispatch({
      type: LIKE_POST_SUCCESS,
      payload: data.post,
    });
  } catch (error) {
    console.error("Failed to like post", error.message);
  }
};
