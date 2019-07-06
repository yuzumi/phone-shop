import { createStore, applyMiddleware } from 'redux';
import middleware from 're-ducks/middleware';
import reducer from 're-ducks/reducer';

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);

export default store;