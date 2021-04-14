import get from '@utils/axios/get';
import * as Config from '@utils/axios/axiosConfig';

interface getArticlesParams {
  status?: string;
}

export const getArticles = (params : getArticlesParams) => {
  const { status = 'all' } = params;

  return get<IPagination<IArticle>>('api/restricted/articles', Config.withToken({ params: { status } }));
};
