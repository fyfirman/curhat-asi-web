import get from '@utils/axios/get';
import * as Config from '@utils/axios/axiosConfig';

export enum UserGroup {
  Cadre = 'kdr',
  Midwife = 'bdn',
  Conselor = 'cons',
  DoctorGeneral = 'du',
  DoctorSpecialist = 'dsp',
}

export const getUsers = (type?: UserGroup) => {
  const config = {
    ...(type && { params: { type } }),
  };

  return get('api/profile', Config.withToken(config));
};

export const getUser = (id: IUser['id']) => get(
  `api/profile/${id}`,
  Config.withToken(),
);
