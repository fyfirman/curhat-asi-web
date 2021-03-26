interface ISession {
  accessToken: string;
  refreshToken: string;
  tokenType: string;
  expiresIn?: number;
}

type SessionAction = {
  type: string;
  payload?: ISession;
};

type DispatchType = (args: SessionAction) => SessionAction;
