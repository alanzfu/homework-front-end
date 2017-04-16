'use strict';

const Constants = require('../constants');
const actions = Constants.actions;
const sorts = Constants.sorts;


const _ = require('lodash');

const initial = {
  repos: [],
  sort: sorts.RECENT
};

module.exports = function (state, action) {
  state = state || initial;
  switch(action.type){
    case actions.GET_REPO_SUCCESS:
      return _.extend({}, state, {
        repos: action.payload.repos
      });
    case actions.GET_REPO_ERROR:
      return _.extend({}, state, {
      });
    case actions.SORT:
      return _.extend({}, state, {
        sort: sorts[action.payload.sortBy]
      });

    default:
      return state;
  }
}
