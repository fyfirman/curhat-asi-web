import selfUserActionTypes from '@redux/constants/selfUserActionTypes';
import * as UserServices from '@services/UserServices';

export const requestSelfUser = () => async (dispatch: DispatchType) => {
  try {
    const response = await UserServices.getSelfUser();

    dispatch(requestSelfUserSuccess(response.payload as IUser));
  } catch (error) {
    dispatch(requestSelfUserFailure(error));
  }
};

const requestSelfUserSuccess = (user: IUser) => ({
  type: selfUserActionTypes.FETCH_SELF_USER_SUCCESS,
  payload: user,
});

const requestSelfUserFailure = (error: object) => ({
  type: selfUserActionTypes.FETCH_SELF_USER_FAILURE,
  error,
});
