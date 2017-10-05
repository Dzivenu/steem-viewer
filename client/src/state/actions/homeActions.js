import { FETCH_TRENDING } from './actionTypes';

export const fetchTrending = () => ({
  type: FETCH_TRENDING.PENDING,
});

export const fetchTrendingSuccess = payload => ({
  type: FETCH_TRENDING.SUCCESS,
  payload,
});

export const fetchTrendingFail = error => ({
  type: FETCH_TRENDING.ERROR,
});
