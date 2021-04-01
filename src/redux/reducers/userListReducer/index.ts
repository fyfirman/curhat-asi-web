import { combineReducers } from '@reduxjs/toolkit';
import mommiesReducer from './mommiesReducer';

const userListReducer = combineReducers({
  mommies: mommiesReducer,
});

export default userListReducer;
