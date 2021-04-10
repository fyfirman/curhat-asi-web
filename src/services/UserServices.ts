import get from '@utils/axios/get';
import post from '@utils/axios/post';
import * as Config from '@utils/axios/axiosConfig';
import UserGroup from '@constants/UserGroupEnum';

export interface IGetUsersParams {
  userGroupId?: UserGroup;
  villageId?: IVillage['id'];
  subDistrictId?: ISubDistrict['id'];
  districtId?: IDistrict['id'];
}

export const getUsers = (params: IGetUsersParams) => {
  const config = { params };

  return get<{ message: string, payload: IUser[] }>('api/users', Config.withToken(config));
};

interface IGetUserResponse {
  message: string;
  payload: IMoms;
}

export const getUser = (id: IUser['id']) => get<IGetUserResponse>(
  `api/users/${id}`,
  Config.withToken(),
);

export const getSelfUser = () => get<PayloadResponse<IUser>>(
  'api/profile',
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
