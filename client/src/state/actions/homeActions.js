import { FETCH_TRENDING, FETCH_TAGS } from './actionTypes';

export const fetchTrending = () => ({
  type: FETCH_TRENDING.PENDING,
});

export const fetchTrendingSuccess = payload => ({
  type: FETCH_TRENDING.SUCCESS,
  payload,
});

export const fetchTrendingFail = error => ({
  type: FETCH_TRENDING.ERROR,
  error,
});

export const fetchTags = () => ({
  type: FETCH_TAGS.PENDING,
});

export const fetchTagsSuccess = payload => ({
  type: FETCH_TAGS.SUCCESS,
  payload,
});

export const fetchTagsFail = error => ({
  type: FETCH_TAGS.ERROR,
  error,
});
