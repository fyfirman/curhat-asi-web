import UserGroup from '@constants/UserGroupEnum';
import * as UserGroupActions from '@constants/UserGroupActions';
import * as UserServices from '@services/UserServices';

export const requestUserList = (type: UserGroup) => async (dispatch: DispatchType) => {
  try {
    const userList = await UserServices.getUsers(type);

    dispatch(requestUserListSuccess(userList as IUser[], type));
  } catch (error) {
    // TODO:  dispatch() error;
    // eslint-disable-next-line no-alert
    alert(JSON.stringify(error));
    dispatch(requestUserListFailure(type));
  }
};

export const requestUserListSuccess = (userList: IUser[], type: UserGroup) => ({
  type: UserGroupActions.SUCCESS[type],
  payload: userList,
});

export const requestUserListFailure = (type: UserGroup) => ({
  type: UserGroupActions.FAILURE[type],
});
