import { AxiosRequestConfig } from 'axios';
import { BASE_URL } from '@utils/config';
import getFormData from '@utils/getFormData';
import axios from './axios';

const put = (path: string, data: any, config: AxiosRequestConfig) => {
  const promise = new Promise((resolve, reject) => {
    axios.put(`${BASE_URL}/${path}`, data ? getFormData(data) : {}, {
      ...config,
      headers: {
        ...config.headers,
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(
        (result) => {
          resolve(result.data);
        },
        (err) => {
          reject(err);
        },
      );
  });

  return promise;
};

export default put;
