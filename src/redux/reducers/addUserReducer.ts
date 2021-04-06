import addUserActionTypes from '@redux/constants/addUserActionTypes';

const initialState: IStandardState = {
  isLoading: false,
  error: {},
};

const addUserReducer = (
  state: IStandardState = initialState,
  action: IStandardAction,
): IStandardState => {
  const { type, error } = action;

  switch (type) {
    case addUserActionTypes.FETCH_ADD_USER:
      return {
        ...state,
        isLoading: true,
      };
    case addUserActionTypes.FETCH_ADD_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case addUserActionTypes.FETCH_ADD_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error,
      };
    default:
      return state;
  }
};

export default addUserReducer;
