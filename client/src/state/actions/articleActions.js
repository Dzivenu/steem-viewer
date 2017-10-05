import { FETCH_ARTICLE } from './actionTypes';

export const fetchArticle = (author, permlink) => ({
  type: FETCH_ARTICLE.PENDING,
  payload: {
    author,
    permlink,
  },
});

export const fetchArticleSuccess = payload => ({
  type: FETCH_ARTICLE.SUCCESS,
  payload,
});

export const fetchArticleFail = error => ({
  type: FETCH_ARTICLE.ERROR,
  error,
});
