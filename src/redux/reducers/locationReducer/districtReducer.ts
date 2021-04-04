import { districtTypes } from '@redux/constants/locationActionTypes';

const initialState: DistrictState = {
  payload: undefined,
  isLoading: false,
  error: undefined,
};

const districtReducer = (
  state: DistrictState = initialState,
  action: DistrictAction,
): DistrictState => {
  const { type, payload, error } = action;

  switch (type) {
    case districtTypes.FETCH_DISTRICT_SUCCESS:
      return {
        ...state,
        payload,
        isLoading: false,
      };
    case districtTypes.FETCH_DISTRICT_FAILURE:
      return {
        ...state,
        error,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default districtReducer;
