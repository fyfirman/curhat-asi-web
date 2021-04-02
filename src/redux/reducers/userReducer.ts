import { userTypes } from '../../constants/actionTypes';

const initialState: IUser = {
  id: 0,
  userGroup: {},
  chatAccessToken: null,
  createdAt: '',
  updatedAt: '',
  deletedAt: null,
  fullName: '',
  username: '',
};

const userReducer = (state: IUser = initialState, action: UserAction): IUser => {
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
