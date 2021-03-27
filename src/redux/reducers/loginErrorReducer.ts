import { loginErrorTypes } from '../../constants/actionTypes';

const initialState: ILoginError = {
  error: '',
  errorDescription: '',
  hint: '',
  message: '',
};

const loginErrorReducer = (state = initialState, action: SessionAction) => {
  const { type, payload } = action;

  switch (type) {
    case loginErrorTypes.FLUSH_LOGIN_ERROR:
      return initialState;
    case loginErrorTypes.SET_LOGIN_ERROR:
      return {
        ...initialState,
        ...payload,
      };
    default:
      return state;
  }
};

export default loginErrorReducer;
