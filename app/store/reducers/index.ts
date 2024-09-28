import { combineReducers } from "redux";
import { authReducer } from "./auth.reducer";
import { postReducer } from "./post.reducer";
import { commentReducer } from "./comment.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  post: postReducer,
  comment: commentReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
