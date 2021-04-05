interface IOccupation{
  id: number;
  name: string;
}

interface UserAction implements Action {
  type: string;
  payload?: IUser;
}

interface IUser extends TimeStamp {
  id: number;
  userGroupId?: UserGroupId;
  userGroup: IUserGroup;
  username: string;
  deletedAt: string | null;
  chatAccessToken: string | null;
  fullName: string | null;
}

interface UserAction implements Action {
  type: string;
  payload?: IUser;
}
