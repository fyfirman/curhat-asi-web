interface IConsultation extends TimeStamp {
  id: string;
  description: string;
  solved: boolean;
  closedAt: string | null;
  lastPost: IConsultationPost;
  userId: IUser['id'];
  closedBy: IUser | null;
  user: IUser;
  posts: IConsultationPost[];
}

interface IConsultationInfo {
  age: string;
  bab: string;
  bak: string;
  feed: string;
  height: string;
  weight: string;
  feedUsing: string;
  otherFoodGiven: string;
}

interface IConsultationPayload{
  payload: {
    currentPage: number;
    data: IConsultation[];
    from: number;
    lastPage: number;
    firtsPageUrl: string;
    lastPageUrl: string;
    nextPageUrl: string | null;
    prevPageUrl: string | null;
    perPage: number;
    to: number;
    total: number;
  }
}

interface ConsultationsAction implements Action {
  type: string;
  payload?: IConsultationPayload;
}
