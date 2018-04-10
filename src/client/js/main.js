import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from '_store/client/store.js';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '_components/App';
import '_styles/main.scss';

ReactDOM.hydrate(
  <Router>
  <Provider store={store}>
    <App />
  </Provider>
  </Router>, 
  document.getElementById('app')
);
