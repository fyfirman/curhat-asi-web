interface IUser extends TimeStamp{
  id: number;
  userGroupId?: UserGroupId;
  username: string;
  deletedAt: string | null;
  chatAccessToken: string | null;
  fullName: string | null;
  fullName: string | null;
}

type UserState = {
  users: IUser[];
};

interface UserAction implements Action {
  type: string;
  payload?: IUser;
}
