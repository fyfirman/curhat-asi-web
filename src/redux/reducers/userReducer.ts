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
        id: '',
        name: '',
        token: '',
      };
    default:
      return {
        ...state,
        ...action.user,
      };
  }
};

export default userReducer;
