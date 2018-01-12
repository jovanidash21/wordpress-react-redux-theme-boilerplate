import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import options from './options';
import menu from './menu';
import page from './page';
import post from './post';

const reducers = combineReducers({
  router: routerReducer,
  options,
  menu,
  page,
  post
});

export default reducers;
