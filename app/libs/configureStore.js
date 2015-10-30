import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { compose, createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import storage from './storage';

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  createLogger()
)(createStore);

export default function configureStore() {
  const initialState = storage.get('app') || undefined;
  const store = createStoreWithMiddleware(rootReducer, initialState);
  store.subscribe(() =>
    storage.set('app', store.getState())
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
