interface IArticle extends TimeStamp {
  title: string;
  content: string;
  create_by: IUser['id'];
  id: number;
  status: string;
  showApiUrl: string;
  showUrl: string;
  editUrl: string;
  deleteUrl: string;
  restoreUrl: string;
  averageRating: string | null;
}
