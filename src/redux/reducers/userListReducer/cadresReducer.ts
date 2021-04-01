import { cadresTypes } from '../../../constants/userListActionTypes';

const initialState: UserListState = {
  payload: [],
  isLoading: false,
  error: {},
};

const cadresReducer = (
  state: UserListState = initialState,
  action: UserListAction,
): UserListState => {
  const { type, payload, error } = action;

  switch (type) {
    case cadresTypes.FETCH_CADRES_SUCCESS:
      return {
        ...state,
        payload,
        isLoading: false,
      };
    case cadresTypes.FETCH_CADRES_FAILURE:
      return {
        ...state,
        error,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default cadresReducer;
