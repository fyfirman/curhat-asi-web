interface IVillage{
  id: string;
  subDistrictId: string;
  name: string;
  // There is more sub-models but not gonna used, so i skipped this section
}

interface IOccupation{
  id: number;
  name: string;
}

interface IUser extends TimeStamp{
  id: number;
  userGroupId?: UserGroupId;
  username: string;
  deletedAt: string | null;
  chatAccessToken: string | null;
  fullName: string | null;
}

interface UserAction implements Action {
  type: string;
  payload?: IUser;
}
interface IVillage{
  id: string;
  subDistrictId: string;
  name: string;
}

interface IUser extends TimeStamp {
  id: number;
  userGroupId?: UserGroupId;
  username: string;
  deletedAt: string | null;
  chatAccessToken: string | null;
  fullName: string | null;
}

interface UserAction implements Action {
  type: string;
  payload?: IUser;
}
