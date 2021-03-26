/* eslint-disable no-console */
import axios from 'axios';
import { BASE_URL } from '@utils/config';

const instance = axios.create({
  baseURL: BASE_URL,
});

instance.defaults.headers.post['Content-Type'] = 'multipart/form-data';
instance.interceptors.request.use(
  (config) => {
    console.log(
      `REQUEST SENT${config.method} ${config.url} withToken=${
        config.headers.Authorization ?? 'FALSE'
      }`,
    );
    if (config.data) console.log(config.data);
    return config;
  },
  (error) => Promise.reject(error),
);

export default instance;
