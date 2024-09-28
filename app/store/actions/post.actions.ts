import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  LIKE_POST_SUCCESS,
  UNLIKE_POST_SUCCESS,
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

      console.log({ data });

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
        payload: data.post,
      });

      enqueueSnackbar({
        message: "Post unliked successfully!",
        variant: "success",
      });
    } catch (error) {
      console.error("Failed to like post", error);
    }
  };
