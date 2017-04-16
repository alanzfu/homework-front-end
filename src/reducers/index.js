'use strict';
import {combineReducers} from 'redux';


const reducers = {
  list: import './listReducers.js',

  input: import './inputReducers.js'
}

export default combineReducers(reducers);
