import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { routerMiddleware } from 'react-router-redux';
import history from '../history';
import reducers from '../reducers';

const reactRouterMiddleware = routerMiddleware(history);

var middlewares = [
  thunk,
  promiseMiddleware({
    promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'ERROR']
  }),
  reactRouterMiddleware
];

if ( process.env.NODE_ENV === 'development' ) {
  const { logger } = require('redux-logger');

  middlewares.push(logger);
}

const store = createStore(
  reducers,
  applyMiddleware( ...middlewares )
);

export default store;
