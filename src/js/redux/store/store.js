import { createStore, compose } from 'redux';
//import { syncHistoryWithStore } from 'react-router-redux';
//import { browserHistory } from 'react-router';
import allReducers from '_reducers/index';
/* Import the JSON data file */
import defaultState from '_data/state';
/* Our default state object */
const store = createStore(allReducers, defaultState);
//const history = syncHistoryWithStore(browserHistory, store);

export {
  store
  //history
};