/* eslint-disable no-console */
import axios from 'axios';
import { BASE_URL } from '@utils/config';
import { DEBUG_MODE } from '../utils/config';

const instance = axios.create({
  baseURL: BASE_URL,
});

instance.defaults.headers.post['Content-Type'] = 'multipart/form-data';
instance.interceptors.request.use(
  (config) => {
    if (DEBUG_MODE) {
      console.log(config.data);
      console.table([
        ['method', config.method],
        ['base_url', config.baseURL],
        ['url', config.url],
        ['auth-headers', config.headers?.Authorization],
        ['data', JSON.stringify(config.data) ?? null],
      ]);
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export default instance;
