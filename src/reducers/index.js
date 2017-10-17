import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import menu from './menu';
import page from './page';
import post from './post';

const reducers = combineReducers({
  router: routerReducer,
  menu,
  page,
  post
});

export default reducers;
