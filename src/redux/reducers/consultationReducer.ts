import { consultationTypes } from '../../constants/actionTypes';

const initialState: IConsultation = {
  id: '',
  description: '',
  solved: false,
  closedAt: null,
  closedBy: null,
  posts: [],
  createdAt: '',
  updatedAt: '',
};

const consultationListReducer = (state = initialState, action: ConsultationsAction) => {
  const { type, payload } = action;

  switch (type) {
    case consultationTypes.FETCH_CONSULTATION_SUCCESS:
      return {
        ...initialState,
        ...payload,
      };
    default:
      return state;
  }
};

export default consultationListReducer;
