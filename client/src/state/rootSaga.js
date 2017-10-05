import { spawn, all } from 'redux-saga/effects';
import { watchFetchTrending } from './sagas/homeSaga';
import { watchFetchArticle } from './sagas/articleSaga';

function* rootSaga() {
  yield all([spawn(watchFetchTrending), spawn(watchFetchArticle)]);
}

export default rootSaga;
