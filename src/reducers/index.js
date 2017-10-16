import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import menu from './menu';
import page from './page';

const reducers = combineReducers({
  router: routerReducer,
  menu,
  page
});

export default reducers;
