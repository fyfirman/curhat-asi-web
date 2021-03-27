import { combineReducers } from '@reduxjs/toolkit';
import loginErrorReducer from './loginErrorReducer';
import sessionReducer from './sessionReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  session: sessionReducer,
  loginError: loginErrorReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
