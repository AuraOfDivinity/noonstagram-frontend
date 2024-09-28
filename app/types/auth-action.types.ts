import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGOUT,
} from "../constants/auth.constants";

// Define a type for the actions
export type AuthActions =
  | { type: typeof LOGIN_REQUEST }
  | { type: typeof LOGIN_SUCCESS; payload: { token: string; user: any } }
  | { type: typeof LOGIN_FAILURE; payload: string }
  | { type: typeof REGISTER_REQUEST }
  | { type: typeof REGISTER_SUCCESS; payload: { token: string; user: any } }
  | { type: typeof REGISTER_FAILURE; payload: string }
  | { type: typeof LOGOUT };
