import * as ConsultationPostServices from '@services/ConsultationPostServices';
import { consultationTypes } from '../../constants/actionTypes';

export const requestConsultationPosts = (consultationId: number) => async (
  _dispatch: DispatchType,
) => {
  try {
    const posts = await ConsultationPostServices.getConsultationPost(consultationId);
    console.log(posts);

    // dispatch(requestConsultationPostsSuccess(consultations as IConsultationPayload));
  } catch (error) {
    // TODO:  dispatch() error;
    alert(JSON.stringify(error));
  }
};

export const requestConsultationPostsSuccess = (
  consultations: IConsultationPayload,
) => ({
  type: consultationTypes.FETCH_CONSULTATIONS_SUCCESS,
  payload: consultations,
});
