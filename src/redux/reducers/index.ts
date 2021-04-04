import { combineReducers } from '@reduxjs/toolkit';
import loginErrorReducer from './loginErrorReducer';
import sessionReducer from './sessionReducer';
import userReducer from './userReducer';
import consultationReducer from './consultationReducer';
import consultationListReducer from './consultationListReducer';
import consultationPostsReducer from './consultationPostReducer';
import userListReducer from './userListReducer';
import userProfileReducer from './userProfileReducer';
import locationReducer from './locationReducer';

const rootReducer = combineReducers({
  user: userReducer,
  session: sessionReducer,
  loginError: loginErrorReducer,
  consultation: consultationReducer,
  consultationList: consultationListReducer,
  consultationPosts: consultationPostsReducer,
  userList: userListReducer,
  userProfile: userProfileReducer,
  location: locationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
