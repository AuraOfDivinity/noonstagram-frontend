import {
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE,
} from "@/constants/comment.constants";
import axios from "axios";
import { Dispatch } from "redux";
import { fetchPosts } from "./post.actions";
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
} from "@/constants/post.constants";
import { RootState } from "../reducers";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const submitComment =
  (postId: string, commentText: string) =>
  async (dispatch: Dispatch, getState: () => RootState) => {
    try {
      dispatch({ type: ADD_COMMENT_REQUEST });
      const { token } = getState().auth;

      const response = await axios.post(
        `${API_BASE_URL}/comments/${postId}`,
        {
          text: commentText,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch({
        type: ADD_COMMENT_SUCCESS,
        payload: response.data.comment,
      });
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
      let errorMessage = "Failed to submit comment.";
      if (axios.isAxiosError(error)) {
        errorMessage = error.response?.data?.message || error.message;
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }

      dispatch({
        type: ADD_COMMENT_FAILURE,
        payload: errorMessage,
      });
    }
  };
