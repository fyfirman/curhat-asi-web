interface ILoginError {
  error: string;
  errorDescription: string;
  hint: string;
  message: string;
}

interface LoginErrorAction implements Action {
  type: string;
  payload?: ILoginError;
}
