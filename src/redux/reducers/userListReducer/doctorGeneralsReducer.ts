import { doctorGeneralTypes } from '../../../constants/userListActionTypes';

const initialState: UserListState = {
  payload: [],
  isLoading: false,
  error: {},
};

const doctorGeneralsReducer = (
  state: UserListState = initialState,
  action: UserListAction,
): UserListState => {
  const { type, payload, error } = action;

  switch (type) {
    case doctorGeneralTypes.FETCH_DOCTOR_GENERAL_SUCCESS:
      return {
        ...state,
        payload,
        isLoading: false,
      };
    case doctorGeneralTypes.FETCH_DOCTOR_GENERAL_FAILURE:
      return {
        ...state,
        error,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default doctorGeneralsReducer;
