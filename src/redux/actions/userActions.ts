/* eslint-disable no-console */
import * as Auth from '@services/AuthServices';
import { sessionTypes, userTypes } from '../../constants/actionTypes';

export const loginSuccess = (session: ISession) => ({
  type: sessionTypes.SET_SESSION,
  payload: session,
});

export const login = (username: string, password: string) => async (_dispatch: DispatchType) => {
  // TODO: Test pake service yg bener
  try {
    const session = await Auth.login('kdr', username, password);
    console.log(`session${session}`);
  } catch (error) {
    // console.log('Gagal!!!!!!!!!!!!', error.message);
  }

  // dispatch(loginSuccess(session));
};

export const logout = () => ({
  type: userTypes.LOGOUT,
});
