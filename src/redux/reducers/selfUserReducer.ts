import selfUserActionTypes from '@redux/constants/selfUserActionTypes';

const initialState: ISelfUserState = {
  isLoading: false,
  error: {},
  payload: {
    id: 0,
    userGroup: {
      id: 'admin',
      level: 0,
      name: 'Administrator',
    },
    chatAccessToken: null,
    createdAt: '',
    updatedAt: '',
    deletedAt: null,
    fullName: '',
    username: '',
  },
};

const userReducer = (state = initialState, action: ISelfUserAction) => {
  const { type, payload, error } = action;

  switch (type) {
    case selfUserActionTypes.FETCH_SELF_USER:
      return {
        isLoading: true,
      };
    case selfUserActionTypes.FETCH_SELF_USER_SUCCESS:
      return {
        isLoading: false,
        payload,
      };
    case selfUserActionTypes.FETCH_SELF_USER_FAILURE:
      return {
        isLoading: false,
        error,
      };
    default:
      return state;
  }
};

export default userReducer;
