import get from '@utils/axios/get';
import post from '@utils/axios/post';
import * as Config from '@utils/axios/axiosConfig';
import UserGroup from '@constants/UserGroupEnum';
import UserGroupRoutes from '@constants/UserGroupRoutes';

export const getUsers = (type: UserGroup) => {
  const config = {
    ...(type && { params: { type } }),
  };

  return get<{ message: string, payload: IUser[] }>(`api/${UserGroupRoutes[type]}`, Config.withToken(config));
};

interface IGetUserResponse {
  message: string;
  payload: IMoms;
}

export const getUser = (id: IUser['id']) => get<IGetUserResponse>(
  `api/users/${id}`,
  Config.withToken(),
);

export interface IUserRequest {
  userGroupId: IUserGroup['id'];
  phoneNumber: IUser['username'];
  pin: string;
  name: IUser['fullName'];
  pob: IConsultantProfile['pob'];
  dob: IConsultantProfile['dob'];
  villageId: IVillage['id'];
}

export const postUser = (request: IUserRequest) => post<PayloadResponse<IConsultant>>(
  'api/users',
  request,
  Config.withToken(),
);
