import get from '@utils/axios/get';
import * as Config from '@utils/axios/axiosConfig';
import destroy from '@utils/axios/destroy';

interface getArticlesParams {
  status?: string;
}

export const getArticles = (params : getArticlesParams) => {
  const { status = 'all' } = params;

  return get<IPagination<IArticle>>('api/restricted/articles', Config.withToken({ params: { status } }));
};

export const getArticle = (id : string) => get<PayloadResponse<IArticle>>(`api/restricted/articles/${id}`, Config.withToken());

export const deleteArticle = (id: IArticle['id']) => destroy(`api/restricted/articles/${id}`, Config.withToken());
