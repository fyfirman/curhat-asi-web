import { combineReducers } from '@reduxjs/toolkit';
import sessionReducer from './sessionReducer';
import selfUserReducer from './selfUserReducer';
import consultationReducer from './consultationReducer';
import consultationListReducer from './consultationListReducer';
import consultationPostsReducer from './consultationPostReducer';
import userListReducer from './userListReducer';
import userProfileReducer from './userProfileReducer';
import locationsReducer from './locationsReducer';
import addUserReducer from './addUserReducer';

const rootReducer = combineReducers({
  selfUser: selfUserReducer,
  session: sessionReducer,
  consultation: consultationReducer,
  consultationList: consultationListReducer,
  consultationPosts: consultationPostsReducer,
  userList: userListReducer,
  userProfile: userProfileReducer,
  locations: locationsReducer,
  addUser: addUserReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
