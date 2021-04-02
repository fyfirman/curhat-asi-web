interface IPregnancy implements TimeStamp{
  id: number;
  profileId: number;
  pregnancyNum: number;
  abortusExperienced: boolean;
  pregnancyComplaints: string;
  heightBefore: number;
  weightBefore: number;
  heightDuring: number;
  weightDuring: number;
  abortusNum: number;
}
