import post from '@utils/axios/post';
import * as Config from '@utils/axios/axiosConfig';

export const login = async (username: string, password: string) => post('auth/token', Config.bodyWithOauth({
  username,
  password,
}));

export const logout = () => {};
