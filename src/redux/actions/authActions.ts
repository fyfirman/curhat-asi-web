import * as Auth from '@services/AuthServices';
import { AppThunk } from '@utils/AppThunk';
import { loginErrorTypes, sessionTypes } from '../../constants/actionTypes';

export const requestLogin = (
  userGroupId: IUserGroup['id'],
  username: string, password: string,
): AppThunk<Promise<void>> => async (
  dispatch,
) => {
  try {
    const session = await Auth.login(userGroupId, username, password);

    dispatch(setSession(session as ISession));
    dispatch(loginSuccess());
  } catch (error) {
    dispatch(loginFailure(error));
  }
};

export const requestlogout = () => ({
  type: sessionTypes.FLUSH_SESSION,
});

const loginSuccess = () => ({
  type: sessionTypes.FETCH_LOGIN_SUCCESS,
});

const setSession = (session: ISession) => ({
  type: sessionTypes.SET_SESSION,
  payload: session,
});

const loginFailure = (error: object) => ({
  type: loginErrorTypes.SET_LOGIN_ERROR,
  payload: error,
});
