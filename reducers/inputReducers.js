'use strict';
import { actions } from '../constants';
import _ from 'lodash';

const initial = {
  githubHandle: "",
  // formValue: ""
};

export function inputReducers (state, action) {
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
