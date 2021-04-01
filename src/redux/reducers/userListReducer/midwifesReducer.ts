import { midwifesTypes } from '../../../constants/userListActionTypes';

const initialState: UserListState = {
  payload: [],
  isLoading: false,
  error: {},
};

const midwifesReducer = (
  state: UserListState = initialState,
  action: UserListAction,
): UserListState => {
  const { type, payload, error } = action;

  switch (type) {
    case midwifesTypes.FETCH_MIDWIFES_SUCCESS:
      return {
        ...state,
        payload,
        isLoading: false,
      };
    case midwifesTypes.FETCH_MIDWIFES_FAILURE:
      return {
        ...state,
        error,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default midwifesReducer;
