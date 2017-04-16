'use strict';
const actions = require('../constants');
const request = require('request');


/*
  Ajax request to get REPOs from ghAPI
*/

const getReposByHandle = payload => {
  return function(dispatch){
    const url = ` https://api.github.com/users/${payload.githubHandle}/repos`;
    request(url, (err, resp, body) => {
      if (err) {
        return dispatch({
          type: actions.GET_REPO_ERROR
        });
      }

      dispatch({
        type: actions.GET_REPO_SUCCESS,
        payload: JSON.parse(body)
      });
    });
  };
};

const sortRepos = payload => {
  return {
    type: actions.SORT,
    payload: payload
  };
}

//Having trouble with export here, went back to module.exports
module.exports =  {
  getReposByHandle: getReposByHandle,
  sortRepos:  sortRepos 
}
