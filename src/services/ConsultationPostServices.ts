import get from '@utils/axios/get';
import * as Config from '@utils/axios/axiosConfig';

// eslint-disable-next-line import/prefer-default-export
export const getConsultationPost = (id: number) => get(
  `api/consultations/${id}/consultation_posts?sortBy=desc`,
  Config.withToken(),
);
