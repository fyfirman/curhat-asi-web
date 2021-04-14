import get from '@utils/axios/get';
import * as Config from '@utils/axios/axiosConfig';

export const getArticleCategories = () => get<IPagination<IArticleCategory>>('api/restricted/articles_category', Config.withToken());
