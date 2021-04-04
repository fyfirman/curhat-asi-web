import { combineReducers } from '@reduxjs/toolkit';
import districtsReducer from './districtsReducer';
import provincesReducer from './provincesReducer';
import subDistrictsReducer from './subDistrictsReducer';
import villagesReducer from './villagesReducer';

const locationReducer = combineReducers({
  villages: villagesReducer,
  subDistricts: subDistrictsReducer,
  districts: districtsReducer,
  provinces: provincesReducer,
});

export default locationReducer;
