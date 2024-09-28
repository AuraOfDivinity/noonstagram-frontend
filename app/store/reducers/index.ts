import { combineReducers } from "redux";
import { authReducer } from "./auth.reducer";
import { postReducer } from "./post.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  post: postReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
