import { combineReducers } from '@reduxjs/toolkit';
import loginErrorReducer from './loginErrorReducer';
import sessionReducer from './sessionReducer';
import userReducer from './userReducer';
import consultationReducer from './consultationReducer';
import consultationPostsReducer from './consultationPostReducer';

const rootReducer = combineReducers({
  user: userReducer,
  session: sessionReducer,
  loginError: loginErrorReducer,
  consultations: consultationReducer,
  consultationPosts: consultationPostsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
