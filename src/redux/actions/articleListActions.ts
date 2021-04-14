import * as ArticleServices from '@services/ArticleServices';
import articleListActionTypes from '@redux/constants/articleListActionTypes';

export const requestArticleList = (status?: string) => async (dispatch: DispatchType) => {
  try {
    dispatch({ type: articleListActionTypes.FETCH_ARTICLE_LIST });
    const response = await ArticleServices.getArticles({ status });

    dispatch(requestArticleListSuccess(response.payload as IArticleListPayload));
  } catch (error) {
    // TODO:  dispatch() error;
    // eslint-disable-next-line no-alert
    alert(JSON.stringify(error.response));
    dispatch(requestArticleListFailure(error.response));
  }
};

const requestArticleListSuccess = (payload: IArticleListPayload) => ({
  type: articleListActionTypes.FETCH_ARTICLE_LIST_SUCCESS,
  payload,
});

const requestArticleListFailure = (error: Record<any, any>) => ({
  type: articleListActionTypes.FETCH_ARTICLE_LIST_FAILURE,
  error,
});
