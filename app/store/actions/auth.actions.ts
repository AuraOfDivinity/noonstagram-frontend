// src/store/actions/authActions.ts
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGOUT,
} from "@/app/constants/auth.constants";
import { AuthActions } from "@/app/types/auth-action.types";
import axios from "axios";
import { enqueueSnackbar } from "notistack";
import { Dispatch } from "redux";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// Thunk action for login
export const login = (email: string, password: string) => {
  return async (dispatch: Dispatch<AuthActions>) => {
    try {
      dispatch({ type: LOGIN_REQUEST });

      const { data } = await axios.post(`${API_BASE_URL}/users/login`, {
        email,
        password,
      });

      dispatch({
        type: LOGIN_SUCCESS,
        payload: { token: data.token, user: data.user },
      });

      enqueueSnackbar({
        message: "Logged in successfully!",
        variant: "success",
      });

      localStorage.setItem("token", data.token);
    } catch (error) {
      let errorMessage = "Login failed";
      if (axios.isAxiosError(error)) {
        errorMessage = error.response?.data?.message || error.message;
        enqueueSnackbar({
          message: errorMessage,
          variant: "error",
        });
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }

      dispatch({
        type: LOGIN_FAILURE,
        payload: errorMessage,
      });
    }
  };
};

// Similarly adjust the register action
export const register = (name: string, email: string, password: string) => {
  return async (dispatch: Dispatch<AuthActions>) => {
    try {
      dispatch({ type: REGISTER_REQUEST });

      const { data } = await axios.post(`${API_BASE_URL}/register`, {
        name,
        email,
        password,
      });

      dispatch({
        type: REGISTER_SUCCESS,
        payload: { token: data.token, user: data.user },
      });

      localStorage.setItem("token", data.token);
    } catch (error) {
      let errorMessage = "Registration failed";
      if (axios.isAxiosError(error)) {
        errorMessage = error.response?.data?.message || error.message;
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }

      dispatch({
        type: REGISTER_FAILURE,
        payload: errorMessage,
      });
    }
  };
};

// Action for logout
export const logout = () => (dispatch: Dispatch<AuthActions>) => {
  localStorage.removeItem("token");
  dispatch({ type: LOGOUT });
};
