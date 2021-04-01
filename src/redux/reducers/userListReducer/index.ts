import { combineReducers } from '@reduxjs/toolkit';
import cadresReducer from './cadresReducer';
import conselorsReducer from './conselorsReducer';
import doctorGeneralsReducer from './doctorGeneralsReducer';
import doctorSpecialistsReducer from './doctorSpecialistsReducer';
import midwifesReducer from './midwifesReducer';
import mommiesReducer from './mommiesReducer';

const userListReducer = combineReducers({
  mommies: mommiesReducer,
  cadres: cadresReducer,
  midwifes: midwifesReducer,
  conselors: conselorsReducer,
  doctorGenerals: doctorGeneralsReducer,
  doctorSpecialists: doctorSpecialistsReducer,
});

export default userListReducer;
