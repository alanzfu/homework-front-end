'use strict';
import {combineReducers} from 'redux';
import listReducers from './listReducers.js';
import inputReducers from './inputReducers.js';


const reducers = {
  list: listReducers,

  input: inputReducers
}

export default combineReducers(reducers);
