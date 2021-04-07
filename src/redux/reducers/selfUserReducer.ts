import { userTypes } from '../../constants/actionTypes';

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

const userReducer = (state = initialState, action: ISelfUserAction): ISelfUserState => {
  const { type, payload } = action;

  switch (type) {
    case userTypes.LOGIN_SUCCESS:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default userReducer;
