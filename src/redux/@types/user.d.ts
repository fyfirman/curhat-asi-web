interface IUser {
  id: string;
  name: string;
  token: string;
}

type UserState = {
  users: IUser[];
};

type UserAction = {
  type: string;
  user?: IUser;
};

type DispatchType = (args: UserAction) => UserAction;
