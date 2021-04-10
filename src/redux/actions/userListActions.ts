import store from '@redux/store';
import UserGroup from '@constants/UserGroupEnum';
import * as UserGroupActions from '@constants/UserGroupActions';
import * as UserServices from '@services/UserServices';
import { IGetUsersParams } from '../../services/UserServices';

const getLocationParams = () : IGetUsersParams => {
  const selfUser : IConsultant = store.getState().selfUser.payload;

  switch (selfUser.userGroupId) {
    case UserGroup.Midwife:
      return { villageId: selfUser.profile?.villageId };
    case UserGroup.Conselor || UserGroup.DoctorGeneral:
      return { subDistrictId: selfUser.profile?.village?.subDistrictId };
    case UserGroup.DoctorGeneral:
      return { districtId: selfUser.profile?.village?.subDistrict.districtId };
    default:
      return {};
  }
};

export const requestUserList = (userGroupId: UserGroup) => async (dispatch: DispatchType) => {
  try {
    const params = getLocationParams();

    const userList = await UserServices.getUsers({
      userGroupId,
      ...params,
    });

    dispatch(requestUserListSuccess(
      userList.payload as IUser[],
      userGroupId,
    ));
  } catch (error) {
    // TODO:  dispatch() error;
    // eslint-disable-next-line no-alert
    alert(JSON.stringify(error));
    dispatch(requestUserListFailure(userGroupId));
  }
};

export const requestUserListSuccess = (userList: IUser[], type: UserGroup) => ({
  type: UserGroupActions.SUCCESS[type],
  payload: userList,
});

export const requestUserListFailure = (type: UserGroup) => ({
  type: UserGroupActions.FAILURE[type],
});
