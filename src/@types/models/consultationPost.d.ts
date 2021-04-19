interface IConsultationPost extends TimeStamp {
  id: string;
  consultationId: number;
  deletedAt?: string | null;
  message: string;
  meta?: string | null;
  picture?: strin;
  pictureId?: null;
  replied?: null;
  repliedPostId?: null;
  user: IUser;
  userId: IUser['id'];
  voiceNote?: null;
  voiceNoteId?: null;
}

interface IConsultationPostState {
  data: IConsultationPost[];
  isLoaded: boolean;
}

interface ConsultationPostsAction {
  type: string;
  payload?: IConsultationPostState;
}
