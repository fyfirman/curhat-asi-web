import { mommiesTypes } from '../../../constants/userListActionTypes';

const initialState: UserListState <IMoms> = {
  payload: [],
  isLoading: false,
  error: {},
};

const mommiesReducer = (
  state: UserListState <IMoms> = initialState,
  action: UserListAction,
): UserListState <IMoms> => {
  const { type, payload, error } = action;

  switch (type) {
    case mommiesTypes.FETCH_MOMMIES_SUCCESS:
      return {
        ...state,
        payload,
        isLoading: false,
      };
    case mommiesTypes.FETCH_MOMMIES_FAILURE:
      return {
        ...state,
        error,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default mommiesReducer;
