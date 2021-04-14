interface IArticle extends TimeStamp {
  title: string;
  content: string;
  createBy: IUser['id'];
  id: number;
  status: string;
  showApiUrl: string;
  showUrl: string;
  editUrl: string;
  deleteUrl: string;
  restoreUrl: string;
  averageRating: string | null;
  postedAt: string | null;
  viewCount: number;
  creator: IUser;
  // TODO: fix this
  rates: IArticleRate[];
  category: null;
  tags: string[];
}
