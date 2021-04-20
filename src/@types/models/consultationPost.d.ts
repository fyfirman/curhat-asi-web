interface IConsultationPost extends TimeStamp {
  id: string;
  consultationId: number;
  deletedAt?: string | null;
  message: string;
  meta?: string | null;
  picture?: IPicture;
  pictureId?: IPicture['id'];
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
