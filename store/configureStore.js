'use strict';

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export function configureStore(initialState) {
  console.log('Called');
  return createStoreWithMiddleware(reducer, initialState);
}
