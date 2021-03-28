import { consultationTypes } from '../../constants/actionTypes';

const initialState: IConsultationPayload = {
  currentPage: 1,
  data: [],
  firtsPageUrl: '',
  from: 1,
  lastPage: 1,
  lastPageUrl: '',
  nextPageUrl: '',
  prevPageUrl: '',
  perPage: 10,
  to: 1,
  total: 1,
};

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
