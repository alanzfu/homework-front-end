'use strict';
const actions  = require('../constants').actions;
const _ = require('lodash');

const initial = {
  githubHandle: "",
  // formValue: ""
};

module.exports = function inputReducers (state, action) {
  state = state || initial;
  switch(action.type){
    case actions.SUBMIT_HANDLE:
      return _.extend({}, state, {
        githubHandle: action.payload.githubHandle,
      });
    default:
      return state;
  }
}
