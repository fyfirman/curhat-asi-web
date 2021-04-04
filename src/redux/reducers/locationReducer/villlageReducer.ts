import { villageTypes } from '@redux/constants/locationActionTypes';

const initialState: VillageState = {
  payload: undefined,
  isLoading: false,
  error: undefined,
};

const villageReducer = (
  state: VillageState = initialState,
  action: VillageAction,
): VillageState => {
  const { type, payload, error } = action;

  switch (type) {
    case villageTypes.FETCH_VILLAGE_SUCCESS:
      return {
        ...state,
        payload,
        isLoading: false,
      };
    case villageTypes.FETCH_VILLAGE_FAILURE:
      return {
        ...state,
        error,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default villageReducer;
