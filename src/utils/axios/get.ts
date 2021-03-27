import { AxiosRequestConfig } from 'axios';
import { BASE_URL } from '@utils/config';
import camelize from 'camelize';
import axios from './axios';

const get = (path: string, config: AxiosRequestConfig) => {
  const promise = new Promise((resolve, reject) => {
    axios.get(`${BASE_URL}/${path}`, config).then(
      (result) => {
        resolve(camelize(result.data));
      },
      (err) => {
        reject(err);
      },
    );
  });

  return promise;
};

export default get;
