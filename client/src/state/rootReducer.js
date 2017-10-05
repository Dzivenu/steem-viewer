import { combineReducers } from 'redux';
import home from './reducers/home';
import articles from './reducers/articles';

export default combineReducers({
  home,
  articles,
});
