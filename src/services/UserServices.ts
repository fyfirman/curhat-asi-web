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

export const getUser = (type: UserGroup, id: IUser['id']) => get<{ message: string, payload: IUser }>(
  `api/${UserGroupRoutes[type]}/${id}`,
  Config.withToken(),
);
