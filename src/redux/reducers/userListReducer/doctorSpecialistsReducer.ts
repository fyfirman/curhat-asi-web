import { doctorSpecialistTypes } from '../../../constants/userListActionTypes';

const initialState: UserListState = {
  payload: [],
  isLoading: false,
  error: {},
};

const doctorSpecialistsReducer = (
  state: UserListState = initialState,
  action: UserListAction,
): UserListState => {
  const { type, payload, error } = action;

  switch (type) {
    case doctorSpecialistTypes.FETCH_DOCTOR_SPECIALIST_SUCCESS:
      return {
        ...state,
        payload,
        isLoading: false,
      };
    case doctorSpecialistTypes.FETCH_DOCTOR_SPECIALIST_FAILURE:
      return {
        ...state,
        error,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default doctorSpecialistsReducer;
