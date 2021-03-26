import { AxiosRequestConfig } from 'axios';
import { CLIENT_ID, CLIENT_SECRET } from '@utils/config';
import store from '@redux/store';

const withToken = (config : AxiosRequestConfig) => {
  const { session } = store.getState();

  return {
    ...config,
    headers: {
      Authorization: `${session.tokenType} ${session.accessToken}`,
    },
  };
};

const withOauth = (config : AxiosRequestConfig) => ({
  ...config,
  client_id: CLIENT_ID,
  client_secret: CLIENT_SECRET,
});

const Config = {
  withToken,
  withOauth,
};

export default Config;
