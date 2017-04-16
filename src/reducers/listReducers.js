'use strict';
import { actions, sorts } from '../constants';
import _ from 'lodash';

const initial = {
  repos: [],
  sort: sorts.RECENT
};

export function listReducers (state, action) {
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
