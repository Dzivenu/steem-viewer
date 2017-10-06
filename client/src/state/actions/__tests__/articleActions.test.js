import React from 'react';
import { fetchArticle, fetchArticleFail, fetchArticleSuccess } from '../articleActions';
import { FETCH_ARTICLE } from '../actionTypes';

describe('(articleActions', () => {
  describe('fetchArticle', () => {
    it('returns back fetchArticle action obj', () => {
      const author = 'test-author';
      const permlink = 'test-permlink';
      const expectedObject = {
        type: FETCH_ARTICLE.PENDING,
        payload: {
          author,
          permlink,
        },
      };

      expect(fetchArticle(author, permlink)).toMatchObject(expectedObject);
    });
  });

  describe('fetchArticleFail', () => {
    it('returns back fetchArticleFail action obj', () => {
      const error = 'test error';
      const expectedObject = {
        type: FETCH_ARTICLE.ERROR,
        error,
      };

      expect(fetchArticleFail(error)).toMatchObject(expectedObject);
    });
  });

  describe('fetchArticleSuccess', () => {
    it('returns back fetchArticleSuccess action obj', () => {
      const payload = { id: 0, title: 'test' };
      const expectedObject = {
        type: FETCH_ARTICLE.SUCCESS,
        payload,
      };

      expect(fetchArticleSuccess(payload)).toMatchObject(expectedObject);
    });
  });
});
