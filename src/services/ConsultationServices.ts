import get from '@utils/axios/get';
import * as Config from '@utils/axios/axiosConfig';

export enum ConsultationType {
  Closed = 'closed',
  OnGoing = 'ongoing',
  Waiting = 'waiting',
}

export const getConsultations = (type: ConsultationType) => {
  const config = {
    params: { type },
  };

  return get('api/consultations', Config.withToken(config));
};

export const getConsultationPost = (id: number) => get(
  `api/consultations/${id}/consultation_posts?sortBy=desc`,
  Config.withToken(),
);
