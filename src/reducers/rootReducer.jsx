import { combineReducers } from 'redux';
import { appReducer } from './appReducer';
import { editReducer } from './editReducer';
import { postsReducer } from './postsReducer';

export const rootReducer = combineReducers({
  posts: postsReducer,
  app: appReducer,
  editPosts: editReducer,
});