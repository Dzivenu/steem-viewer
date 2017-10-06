import { spawn, all } from 'redux-saga/effects';
import { watchFetchTrending, watchFetchTags } from './sagas/homeSaga';
import { watchFetchArticle } from './sagas/articleSaga';

function* rootSaga() {
  yield all([spawn(watchFetchTrending), spawn(watchFetchTags), spawn(watchFetchArticle)]);
}

export default rootSaga;
