import { call, put, takeLatest } from 'redux-saga/effects';
import API from '../../api/api';
import { fetchArticleSuccess, fetchArticleFail } from '../actions/articleActions';
import { FETCH_ARTICLE } from '../actions/actionTypes';

export function* fetchArticle(action) {
  try {
    const { author, permlink } = action.payload;
    const result = yield call(API.getArticle, author, permlink);
    yield put(fetchArticleSuccess(result.data));
  } catch (error) {
    yield put(fetchArticleFail(error));
  }
}

export function* watchFetchArticle() {
  yield takeLatest(FETCH_ARTICLE.PENDING, fetchArticle);
}
