/* eslint-disable no-console */
import * as Auth from '@services/AuthServices';
import { sessionTypes, userTypes } from '../../constants/actionTypes';

export const loginSuccess = (session: ISession) => ({
  type: sessionTypes.SET_SESSION,
  payload: session,
});

export const login = (username: string, password: string) => async (dispatch: DispatchType) => {
  try {
    const session = await Auth.login('kdr', username, password);

    dispatch(loginSuccess(session as ISession));
  } catch (error) {
    // TODO: Handle error
    alert(error.message);
  }

  // dispatch(loginSuccess(session));
};

export const logout = () => ({
  type: userTypes.LOGOUT,
});
