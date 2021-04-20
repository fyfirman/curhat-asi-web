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

  return get<PayloadResponse<IConsultationPayload>>(
    'api/dashboard/consultations',
    Config.withToken(config),
  );
};

export const getConsultation = (id: IConsultation['id']) =>
  get<PayloadResponse<IConsultation>>(`api/consultations/${id}`, Config.withToken());

export const getConsultationPost = (id: IConsultation['id']) =>
  get<IConsultationPost[]>(
    `api/consultations/${id}/consultation_posts?sortBy=desc`,
    Config.withToken(),
  );
