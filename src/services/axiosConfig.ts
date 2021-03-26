import { AxiosRequestConfig } from 'axios';
import { CLIENT_ID, CLIENT_SECRET } from '@utils/config';
import store from '@redux/store';

export const withToken = (config?: AxiosRequestConfig) => {
  // TODO: benerin session
  const { session } = store.getState();

  return {
    ...config,
    headers: {
      Authorization: `${session.tokenType} ${session.accessToken}`,
    },
  };
};

export const withOauth = (config?: AxiosRequestConfig) => ({
  ...config,
  client_id: CLIENT_ID,
  client_secret: CLIENT_SECRET,
});
