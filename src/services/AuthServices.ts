import post from './post';
import * as Config from './axiosConfig';

export const login = async (username: string, password: string) => post('auth/token', Config.bodyWithOauth({
  username,
  password,
}));

export const logout = () => {};
