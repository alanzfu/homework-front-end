import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//actions require
import actions from '../actions';
import Components from '../components';



class App extends Component {
  render() {
    return (
      <div className="App">
        // <Components.InputBox />
        // <Components.ListBox />

      </div>
    );
  }
}

function mapStateToProps(state) {
    // instantiate empty object
    // keys currently are: user, view, newRace, activeRace
    let mapping = {};

    for (let k in state){
      mapping[k] = state[k];
    }

  return mapping;
}

function mapDispatchToProps(dispatch) {
  // console.log("THE MAPPED ACTIONS", actions);
  let actionsObj = {}
  for(let key in actions) {
    actionsObj[key] = bindActionCreators(actions[key], dispatch);
  }
  return actionsObj;
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
