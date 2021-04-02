interface ISession {
  isLoggedIn: boolean;
  accessToken: string;
  refreshToken: string;
  tokenType: string;
  expiresIn?: number;
}

interface SessionAction implements Action {
  type: string;
  payload?: ISession;
}
