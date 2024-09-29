import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  LIKE_POST_SUCCESS,
  UNLIKE_POST_SUCCESS,
  FETCH_LIKED_POSTS_FAILURE,
  FETCH_LIKED_POSTS_REQUEST,
  FETCH_LIKED_POSTS_SUCCESS,
  REMOVE_FROM_LIKED_POSTS,
} from "@/constants/post.constants";
import axios from "axios";
import { enqueueSnackbar } from "notistack";
import { Dispatch } from "redux";
import { RootState } from "../reducers";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchPosts =
  () => async (dispatch: Dispatch, getState: () => RootState) => {
    const { token } = getState().auth;
    try {
      dispatch({ type: FETCH_POSTS_REQUEST });

      const { data } = await axios.get(`${API_BASE_URL}/posts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({
        type: FETCH_POSTS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      let errorMessage = "Fetch Posts Failed.";
      if (axios.isAxiosError(error)) {
        errorMessage = error.response?.data?.message || error.message;
        enqueueSnackbar({
          message: errorMessage,
          variant: "error",
        });
      } else if (error instanceof Error) {
        errorMessage = error.message;
        enqueueSnackbar({
          message: errorMessage,
          variant: "error",
        });
      }

      dispatch({
        type: FETCH_POSTS_FAILURE,
        payload: errorMessage,
      });
    }
  };

export const likePost =
  (postId: number) => async (dispatch: Dispatch, getState: () => RootState) => {
    const { token } = getState().auth;

    try {
      const { data } = await axios.post(
        `${API_BASE_URL}/posts/${postId}/like`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch({
        type: LIKE_POST_SUCCESS,
        payload: data.post,
      });

      enqueueSnackbar({
        message: "Post liked successfully!",
        variant: "success",
      });
    } catch (error) {
      console.error("Failed to like post", error);
    }
  };

export const unlikePost =
  (postId: number) => async (dispatch: Dispatch, getState: () => RootState) => {
    const { token } = getState().auth;

    try {
      const { data } = await axios.post(
        `${API_BASE_URL}/posts/${postId}/unlike`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch({
        type: UNLIKE_POST_SUCCESS,
        payload: data.post, // Ensure payload contains the post ID
      });

      dispatch({
        type: REMOVE_FROM_LIKED_POSTS,
        payload: data.post, // Ensure payload contains the post ID
      });

      enqueueSnackbar({
        message: "Post unliked successfully!",
        variant: "success",
      });
    } catch (error) {
      console.error("Failed to unlike post", error);
    }
  };

export const fetchLikedPosts =
  () => async (dispatch: Dispatch, getState: () => RootState) => {
    const { token } = getState().auth; // Extract the token from the auth state
    try {
      dispatch({ type: FETCH_LIKED_POSTS_REQUEST }); // Dispatch request action

      const { data } = await axios.get(`${API_BASE_URL}/posts/liked`, {
        headers: {
          Authorization: `Bearer ${token}`, // Set authorization header
        },
      });

      dispatch({
        type: FETCH_LIKED_POSTS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      let errorMessage = "Fetch Liked Posts Failed."; // Default error message
      if (axios.isAxiosError(error)) {
        errorMessage = error.response?.data?.message || error.message; // Extract error message
        enqueueSnackbar({
          message: errorMessage,
          variant: "error",
        });
      } else if (error instanceof Error) {
        errorMessage = error.message; // Handle general errors
        enqueueSnackbar({
          message: errorMessage,
          variant: "error",
        });
      }

      dispatch({
        type: FETCH_LIKED_POSTS_FAILURE,
        payload: errorMessage, // Dispatch failure action with error message
      });
    }
  };
