interface IUser {
  id: string;
  name: string;
  token: string;
}

type UserState = {
  users: IUser[];
};

interface UserAction implements Action {
  type: string;
  payload?: IUser;
}
