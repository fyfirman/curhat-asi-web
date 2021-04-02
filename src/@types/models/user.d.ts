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

interface IMomsProfile implements TimeStamp{
  id: number;
  pictureId?: number;
  villageId: string,
  occupationId: number;
  nik?: string;
  jkn?: string;
  name?: string;
  pob?: string;
  dob?: string;
  address?: string;
  bloodType?: string;
  religion?: string;
  education?: string;
  maritalStatus?: string;
  housemate?: string;
  houseOwnership?: string;
  housmatesNumber?: number;
  fullAddress?: string;
  occupationName?: string;
  religionText?: string;
  educationText?: string;
  maritalStatusText?: string;
  housemateText?: string;
  houseOwnershipText?: string;
  age?: number;
  domicile?: string;
  imageResource?: string;
  village?: IVillage;
  occupation?: IOccupation;
  husband: null;
  baby: null;
  pregnancy: null;
  picture: null;
}

interface IUser extends TimeStamp{
  id: number;
  userGroupId?: UserGroupId;
  username: string;
  deletedAt: string | null;
  chatAccessToken: string | null;
  fullName: string | null;
  profile?: IMomsProfile;
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

interface IMomsProfile implements TimeStamp{
  id: number;
  pictureId?: number;
  villageId: string,
  occupationId: number;
  nik?: string;
  jkn?: string;
  name?: string;
  pob?: string;
  dob?: string;
  address?: string;
  bloodType?: string;
  religion?: string;
  education?: string;
  maritalStatus?: string;
  housemate?: string;
  houseOwnership?: string;
  housematesNumber?: number;
  fullAddress?: string;
  occupationName?: string;
  religionText?: string;
  educationText?: string;
  maritalStatusText?: string;
  housemateText?: string;
  houseOwnershipText?: string;
  age?: number;
  domicile?: string;
  imageResource?: string;
  village?: IVillage;
  occupation?: IOccupation;
  husband: null;
  baby: null;
  pregnancy: null;
  picture: null;
}

interface IUser<P = IMomsProfile> extends TimeStamp{
  id: number;
  userGroupId?: UserGroupId;
  username: string;
  deletedAt: string | null;
  chatAccessToken: string | null;
  fullName: string | null;
  profile?: P;
}

interface UserAction implements Action {
  type: string;
  payload?: IUser;
}
