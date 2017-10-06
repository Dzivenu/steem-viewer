import { FETCH_TRENDING, FETCH_TAGS } from '../actions/actionTypes';

const INITIAL_STATE = {
  // article preview
  articles: [],
  tags: [],
  loading: false,
  tagsLoading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_TAGS.PENDING:
      return {
        ...state,
        tagsLoading: true,
      };
    case FETCH_TAGS.SUCCESS:
      return {
        ...state,
        tagsLoading: false,
        tags: action.payload,
      };
    case FETCH_TRENDING.PENDING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_TRENDING.SUCCESS:
      return {
        ...state,
        articles: action.payload,
        loading: false,
      };
    case FETCH_TRENDING.ERROR:
      return {
        loading: false,
      };
    default:
      return state;
  }
};
