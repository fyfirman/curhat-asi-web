import get from '@utils/axios/get';
import * as Config from '@utils/axios/axiosConfig';

export enum ConsultationType {
  Closed = 'closed',
  OnGoing = 'ongoing',
  Waiting = 'waiting',
}

export const getConsultations = (type?: ConsultationType) => {
  const config = {
    ...(type && { params: { type } }),
  };

  return get('api/consultations', Config.withToken(config));
};

interface ConsultationResponse {
  payload: IConsultation;
}

export const getConsultation = (id: IConsultation['id']) => get<ConsultationResponse>(
  `api/consultations/${id}`,
  Config.withToken(),
);

export const getConsultationPost = (id: number) => get(
  `api/consultations/${id}/consultation_posts?sortBy=desc`,
  Config.withToken(),
);
