'use strict';
console.log('called from configureStore');

const createStore =require('redux').createStore;
const thunk =require('redux-thunk');
const reducer =require('../reducers');


module.exports = function configureStore(initialState) {
  return createStore(reducer, initialState);
}
