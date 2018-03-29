import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import logger from 'redux-logger';
//import { syncHistoryWithStore } from 'react-router-redux';
//import { browserHistory } from 'react-router';
import allReducers from '_reducers/index';
/* Import the JSON data file */
import defaultState from '_data/state';
/* Our default state object */
const middleWare = applyMiddleware(promise(), thunk, logger());
const store = middleWare(createStore)(allReducers, defaultState);
//const history = syncHistoryWithStore(browserHistory, store);

export {
  store
  //history
};