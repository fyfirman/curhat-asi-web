import { sessionTypes } from '@constants/actionTypes';

const initialState: ISessionState = {
  isLoading: false,
  error: {},
  isLoggedIn: false,
  payload: {
    accessToken: '',
    refreshToken: '',
    tokenType: 'Bearer',
    expiresIn: undefined,
  },
};

const sessionReducer = (state = initialState, action: ISessionAction): ISessionState => {
  const { type, payload, error } = action;

  switch (type) {
    case sessionTypes.FLUSH_SESSION:
      return initialState;
    case sessionTypes.SET_SESSION:
      return {
        ...state,
        payload,
      };
    case sessionTypes.FETCH_LOGIN:
      return {
        ...state,
        isLoading: true,
      };
    case sessionTypes.FETCH_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
      };
    case sessionTypes.FETCH_LOGIN_FAILURE:
      return {
        ...state,
        error,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default sessionReducer;
