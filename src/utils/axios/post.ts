import { AxiosRequestConfig } from 'axios';
import { BASE_URL } from '@utils/config';
import getFormData from '@utils/getFormData';
import camelize from 'camelize';
import { snakefy } from 'snakelize';
import axios from './axios';

const post = <T>(path: string, data?: any, config?: AxiosRequestConfig) => {
  const promise = new Promise<T>((resolve, reject) => {
    if (config) {
      axios.post<T>(
        `${BASE_URL}/${path}`,
        data ? getFormData(snakefy(data)) : {},
        { ...config, headers: config?.headers },
      ).then(
        (result) => {
          resolve(camelize(result.data));
        },
        (err) => {
          reject(camelize(err));
        },
      );
    } else {
      axios.post<T>(
        `${BASE_URL}/${path}`,
        data ? getFormData(snakefy(data)) : {},
      ).then(
        (result) => {
          resolve(camelize(result.data));
        },
        (err) => {
          reject(camelize(err));
        },
      );
    }
  });

  return promise;
};

export default post;
