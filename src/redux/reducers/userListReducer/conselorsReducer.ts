import { conselorsTypes } from '../../../constants/userListActionTypes';

const initialState: UserListState = {
  payload: [],
  isLoading: false,
  error: {},
};

const conselorsReducer = (
  state: UserListState = initialState,
  action: UserListAction,
): UserListState => {
  const { type, payload, error } = action;

  switch (type) {
    case conselorsTypes.FETCH_CONSELORS_SUCCESS:
      return {
        ...state,
        payload,
        isLoading: false,
      };
    case conselorsTypes.FETCH_CONSELORS_FAILURE:
      return {
        ...state,
        error,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default conselorsReducer;
