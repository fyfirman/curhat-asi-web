import * as UserServices from '@services/UserServices';
import { IUserRequest } from '@services/UserServices';

export const requestAddUser = async (data: IUserRequest) => {
  try {
    const response = await UserServices.postUser(data);

    console.log(response.payload);
  } catch (error) {
    // TODO:  dispatch() error;
    // eslint-disable-next-line no-alert
    alert(JSON.stringify(error.response));
  }
};

export const request = {};
