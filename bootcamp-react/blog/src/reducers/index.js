import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReduxer';

export default combineReducers({
  posts: postsReducer,
  users: usersReducer
});
