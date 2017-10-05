import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';
import reducers from '../reducers';

const store = createStore(
  reducers,
  applyMiddleware(
    thunk,
    promiseMiddleware(),
    createLogger()
  )
);

export default store;
