import { combineReducers } from '@reduxjs/toolkit';
import districtReducer from './districtReducer';
import provinceReducer from './provinceReducer';
import subDistrictReducer from './subDistrictReducer';
import villageReducer from './villageReducer';

const locationReducer = combineReducers({
  village: villageReducer,
  subDistrict: subDistrictReducer,
  district: districtReducer,
  province: provinceReducer,
});

export default locationReducer;
