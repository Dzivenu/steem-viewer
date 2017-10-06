import { FETCH_TRENDING, FETCH_TAGS } from '../actions/actionTypes';
import {
  fetchTrendingSuccess,
  fetchTrendingFail,
  fetchTagsSuccess,
  fetchTagsFail,
} from '../actions/homeActions';
import { takeLatest, call, put } from 'redux-saga/effects';
import API from '../../api/api';

function* fetchTrending(action) {
  try {
    const response = yield call(API.getTrending);
    const result = response.data || [];
    yield put(fetchTrendingSuccess(result));
  } catch (error) {
    yield put(fetchTrendingFail(error));
  }
}

function* fetchTags(action) {
  try {
    const response = yield call(API.getTags);
    const result = response.data || [];
    yield put(fetchTagsSuccess(result));
  } catch (error) {
    yield put(fetchTagsFail(error));
  }
}

export function* watchFetchTrending() {
  yield takeLatest(FETCH_TRENDING.PENDING, fetchTrending);
}

export function* watchFetchTags() {
  yield takeLatest(FETCH_TAGS.PENDING, fetchTags);
}
