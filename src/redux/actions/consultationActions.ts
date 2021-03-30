import * as ConsultationService from '@services/ConsultationServices';
import { consultationTypes } from '../../constants/actionTypes';
import { ConsultationType } from '../../services/ConsultationServices';

export const requestConsultations = (type?: ConsultationType) => async (dispatch: DispatchType) => {
  try {
    const consultations = await ConsultationService.getConsultations(type);

    dispatch(requestConsultationsSuccess(consultations as IConsultationPayload));
  } catch (error) {
    // TODO:  dispatch() error;
    // eslint-disable-next-line no-alert
    alert(JSON.stringify(error));
  }
};

export const requestConsultationsSuccess = (consultations: IConsultationPayload) => ({
  type: consultationTypes.FETCH_CONSULTATIONS_SUCCESS,
  payload: consultations,
});
