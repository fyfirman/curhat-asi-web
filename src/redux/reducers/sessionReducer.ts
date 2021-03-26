import { sessionTypes } from '../../constants/actionTypes';

const initialState: ISession = {
  accessToken: '',
  refreshToken: '',
  tokenType: 'Bearer',
  expiresIn: undefined,
};

const sessionReducer = (state = initialState, action: SessionAction) => {
  const { type, payload } = action;

  switch (type) {
    case sessionTypes.FLUSH_SESSION:
      return initialState;
    case sessionTypes.SET_SESSION:
      return {
        ...initialState,
        ...payload,
      };
    default:
      return state;
  }
};

export default sessionReducer;
