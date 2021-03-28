import { consultationTypes } from '../../constants/actionTypes';

const initialState: IConsultation[] = [];

const consultationReducer = (state = initialState, action: ConsultationsAction) => {
  const { type, payload } = action;

  switch (type) {
    case consultationTypes.FETCH_CONSULTATIONS_SUCCESS:
      return {
        ...initialState,
        ...payload,
      };
    default:
      return state;
  }
};

export default consultationReducer;
