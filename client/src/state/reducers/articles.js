import { FETCH_ARTICLE } from '../actions/actionTypes';

const INITIAL_STATE = {
  // articles mapped by ID
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ARTICLE.SUCCESS:
      let { id } = action.payload;
      return {
        ...state,
        [id]: action.payload,
      };
    default:
      return state;
  }
};
