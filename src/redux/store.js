import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import reducer from './reducer';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const enhancer = composeEnhancers(
  applyMiddleware(promiseMiddleware())
);

const configureStore = () => {
  return createStore(reducer, {}, enhancer);
};

export default configureStore;
