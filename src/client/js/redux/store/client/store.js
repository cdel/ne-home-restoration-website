import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
/* Import the JSON data file */
import state from '_data/state';
import { createLogger } from 'redux-logger';
//import { syncHistoryWithStore } from 'react-router-redux';
//import { browserHistory } from 'react-router';
import allReducers from '_reducers/index';
/* Retrieve the preloaded state from the server */
const preloadedState = window.__PRELOADED_STATE__ || state;
delete window.__PRELOADED_STATE__;
/* Our default state object */
const loggerSettings = {
  warning: () => false
};
const middleWare = composeWithDevTools(applyMiddleware(promise(), thunk, createLogger(loggerSettings)));
const store = middleWare(createStore)(allReducers, preloadedState);
//const history = syncHistoryWithStore(browserHistory, store);

export {
  store
  //history
};