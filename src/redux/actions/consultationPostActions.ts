import * as ConsultationPostServices from '@services/ConsultationPostServices';
import { consultationPostTypes } from '../../constants/actionTypes';

// eslint-disable-next-line import/prefer-default-export
export const requestConsultationPosts = (consultationId: number) => async (
  dispatch: DispatchType,
) => {
  try {
    const posts = await ConsultationPostServices.getConsultationPost(consultationId);
    console.log(posts);

    dispatch(requestConsultationPostsSuccess(posts as IConsultationPost[]));
  } catch (error) {
    // TODO:  dispatch() error;
    alert(JSON.stringify(error));
  }
};

const requestConsultationPostsSuccess = (
  consultations: IConsultationPost[],
) => ({
  type: consultationPostTypes.FETCH_CONSULTATION_POSTS_SUCCESS,
  payload: { data: consultations, isLoaded: true },
});
