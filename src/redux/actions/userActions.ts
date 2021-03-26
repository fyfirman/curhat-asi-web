import { userTypes } from '../../constants/actionTypes';

const loginSuccess = (user: IUser) => ({
  type: userTypes.LOGIN_SUCCESS,
  user,
});

export const login = (username: string, password: string) => (dispatch: DispatchType) => {
  // TODO: fetch login
  const user: IUser = {
    id: '12312das',
    name: username,
    token: password,
  };

  dispatch(loginSuccess(user));
};

export const logout = () => ({
  type: userTypes.LOGOUT,
});
