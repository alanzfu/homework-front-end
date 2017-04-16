import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from '../store/configureStore';
import App from './App';
import './index.css';

let store = configureStore();

store.subscribe(() => {
  console.log('state changed',store.getState());
});

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <App />
 </Provider>,
  document.getElementById('root')
);
