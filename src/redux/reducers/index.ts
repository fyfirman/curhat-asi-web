import { combineReducers } from '@reduxjs/toolkit';
import loginErrorReducer from './loginErrorReducer';
import sessionReducer from './sessionReducer';
import userReducer from './userReducer';
import consultationReducer from './consultationListReducer';
import consultationPostsReducer from './consultationPostReducer';

const rootReducer = combineReducers({
  user: userReducer,
  session: sessionReducer,
  loginError: loginErrorReducer,
  consultationList: consultationReducer,
  consultationPosts: consultationPostsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
