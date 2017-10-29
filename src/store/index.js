import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { routerMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import history from '../history';
import reducers from '../reducers';

const reactRouterMiddleware = routerMiddleware(history);

const store = createStore(
  reducers,
  applyMiddleware(
    thunk,
    promiseMiddleware({
      promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'ERROR']
    }),
    reactRouterMiddleware,
    createLogger()
  )
);

export default store;