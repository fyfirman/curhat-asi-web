import { AxiosRequestConfig } from 'axios';
import { BASE_URL } from '@utils/config';
import getFormData from '@utils/getFormData';
import camelize from 'camelize';
import decamelize from 'decamelize';
import axios from './axios';

const post = <T>(path: string, data?: any, config?: AxiosRequestConfig) => {
  const promise = new Promise<T>((resolve, reject) => {
    if (config) {
      axios.post<T>(
        `${BASE_URL}/${path}`,
        data ? getFormData(decamelize(data)) : {},
        { ...config, headers: config?.headers },
      ).then(
        (result) => {
          resolve(camelize(result.data));
        },
        (err) => {
          reject(camelize(err.response));
        },
      );
    } else {
      axios.post<T>(
        `${BASE_URL}/${path}`,
        data ? getFormData(decamelize(data)) : {},
      ).then(
        (result) => {
          resolve(camelize(result.data));
        },
        // TODO: define error response type
        (err) => {
          reject(camelize(err.response));
        },
      );
    }
  });

  return promise;
};

export default post;
