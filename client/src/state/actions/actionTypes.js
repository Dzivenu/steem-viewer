const createAsyncActionType = type => ({
  PENDING: `${type}_PENDING`,
  SUCCESS: `${type}_SUCCESS`,
  ERROR: `${type}_ERROR`,
});

export const FETCH_TRENDING = createAsyncActionType('@fetch-trending');
export const FETCH_ARTICLE = createAsyncActionType('@fetch-article');
export const FETCH_TAGS = createAsyncActionType('@fetch-tags');
