import { subDistrictTypes } from '@redux/constants/locationActionTypes';

const initialState: SubDistrictState = {
  payload: undefined,
  isLoading: false,
  error: undefined,
};

const subDistrictReducer = (
  state: SubDistrictState = initialState,
  action: SubDistrictAction,
): SubDistrictState => {
  const { type, payload, error } = action;

  switch (type) {
    case subDistrictTypes.FETCH_SUB_DISTRICT_SUCCESS:
      return {
        ...state,
        payload,
        isLoading: false,
      };
    case subDistrictTypes.FETCH_SUB_DISTRICT_FAILURE:
      return {
        ...state,
        error,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default subDistrictReducer;
