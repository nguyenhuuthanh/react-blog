import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";
import visibilityFilter from "./visibilityFilter";

export default combineReducers({
  posts: postsReducer,
  users: usersReducer,
  filters: visibilityFilter
});
