interface IConsultation {
  id: string;
  users: IUser[];
  posts: IConsultationPost[];
}

interface ConsultationsAction implements Action {
  type: string;
  payload?: IConsultation;
}
