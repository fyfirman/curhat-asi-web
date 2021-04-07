interface IConsultationPayload{
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

interface IConsultationState extends IStandardState {
  payload: IConsultationPayload;
}

interface IConsultationsAction extends IStandardAction {
  payload?: IConsultationPayload;
}
