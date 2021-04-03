import get from '@utils/axios/get';
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
