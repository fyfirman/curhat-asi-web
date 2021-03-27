import { AxiosRequestConfig } from 'axios';
import { BASE_URL } from '@utils/config';
import getFormData from '@utils/getFormData';
import camelize from 'camelize';
import axios from './axios';

const post = (path: string, data?: any, config?: AxiosRequestConfig) => {
  const promise = new Promise((resolve, reject) => {
    if (config) {
      axios.post(
        `${BASE_URL}/${path}`,
        data ? getFormData(data) : {},
        { ...config, headers: config?.headers },
      ).then(
        (result) => {
          resolve(camelize(result.data));
        },
        (err) => {
          reject(err);
        },
      );
    } else {
      axios.post(
        `${BASE_URL}/${path}`,
        data ? getFormData(data) : {},
      ).then(
        (result) => {
          resolve(camelize(result.data));
        },
        (err) => {
          reject(err);
        },
      );
    }
  });

  return promise;
};

export default post;
