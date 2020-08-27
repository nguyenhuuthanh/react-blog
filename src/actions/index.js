import axios from "../apis/jsonPlaceHolder";
import _ from "lodash";
import { FETCH_POSTS, FETCH_USERS, SET_FILTER } from '../reducers/actionTypes';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();
};

export const fetchPosts = () => async dispatch => {
  const response = await axios.get("/posts");
  dispatch({
    type: FETCH_POSTS,
    payload: response.data
  });
};
export const fetchUser = id => async dispatch => {
  const response = await axios.get(`/users/${id}`);
  dispatch({
    type: FETCH_USERS,
    payload: response.data
  });
};

export const setFilter = keyword => ({
  type: SET_FILTER,
  payload: {
    keyword,
  }
});
