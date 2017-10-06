import React from 'react';

import { fetchTrending, fetchTrendingSuccess, fetchTrendingFail } from '../homeActions';
import { FETCH_TRENDING } from '../actionTypes';

describe('(homeActions', () => {
  describe('fetchTrending', () => {
    it('returns back fetchTrending action obj', () => {
      const expectedObject = {
        type: FETCH_TRENDING.PENDING,
      };

      expect(fetchTrending()).toMatchObject(expectedObject);
    });
  });

  describe('fetchTrending', () => {
    it('returns back fetchTrendingFail action obj', () => {
      const error = 'test error';
      const expectedObject = {
        type: FETCH_TRENDING.ERROR,
        error,
      };

      expect(fetchTrendingFail(error)).toMatchObject(expectedObject);
    });
  });

  describe('fetchTrendingSuccess', () => {
    it('returns back fetchTrendingSuccess action obj', () => {
      const payload = { id: 0, title: 'test' };
      const expectedObject = {
        type: FETCH_TRENDING.SUCCESS,
        payload,
      };

      expect(fetchTrendingSuccess(payload)).toMatchObject(expectedObject);
    });
  });
});
