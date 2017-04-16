'use strict';
const combineReducers = require('redux').combineReducers;

const reducers = {
  list: require('./listReducers'),

  input: require('./inputReducers')
}

module.exports = combineReducers(reducers);
