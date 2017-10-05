import { FETCH_TRENDING } from '../actions/actionTypes';
import { fetchTrendingSuccess, fetchTrendingFail } from '../actions/homeActions';
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

export function* watchFetchTrending() {
  yield takeLatest(FETCH_TRENDING.PENDING, fetchTrending);
}
