import * as Auth from '@services/AuthServices';
import { loginErrorTypes, sessionTypes } from '../../constants/actionTypes';

export const requestLogin = (username: string, password: string) => async (
  dispatch: DispatchType,
) => {
  try {
    const session = await Auth.login('kdr', username, password);

    dispatch(loginSuccess(session as ISession));
  } catch (error) {
    dispatch(loginFailed(error.data as ILoginError));
  }
};

export const loginSuccess = (session: ISession) => ({
  type: sessionTypes.SET_SESSION,
  payload: {
    ...session,
    isLoggedIn: true,
  },
});

export const loginFailed = (error: ILoginError) => ({
  type: loginErrorTypes.SET_LOGIN_ERROR,
  payload: error,
});
