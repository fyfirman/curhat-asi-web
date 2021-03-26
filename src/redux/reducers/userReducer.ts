import { userTypes } from '../../constants/actionTypes';

const initialState: IUser = {
  id: '',
  name: '',
  token: '',
};

const userReducer = (state: IUser = initialState, action: UserAction): IUser => {
  switch (action.type) {
    case userTypes.LOGIN_SUCCESS:
      return {
        ...state,
        ...action.user,
      };
    case userTypes.LOGOUT:
      return {
        ...state,
        ...action.user,
      };
    default:
      return {
        ...state,
        ...action.user,
      };
  }
};

export default userReducer;
