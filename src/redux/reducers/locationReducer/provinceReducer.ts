import { provinceTypes } from '@redux/constants/locationActionTypes';

const initialState: ProvinceState = {
  payload: undefined,
  isLoading: false,
  error: undefined,
};

const provinceReducer = (
  state: ProvinceState = initialState,
  action: ProvinceAction,
): ProvinceState => {
  const { type, payload, error } = action;

  switch (type) {
    case provinceTypes.FETCH_PROVINCE_SUCCESS:
      return {
        ...state,
        payload,
        isLoading: false,
      };
    case provinceTypes.FETCH_PROVINCE_FAILURE:
      return {
        ...state,
        error,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default provinceReducer;
