import { FETCH_TRENDING } from '../actions/actionTypes';

const INITIAL_STATE = {
  // article preview
  articles: [],
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
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
