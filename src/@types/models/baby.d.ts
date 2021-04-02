interface IBaby implements TimeStamp {
  id: number;
  profileId: number;
  pregnancyWeeks: number;
  weight: number;
  diameter: number;
  gender: string;
  imd: boolean;
  oneHourInit: boolean;
  feeds: string;
  birthProccess: string;
}
