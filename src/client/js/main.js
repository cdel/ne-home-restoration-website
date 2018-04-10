import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from '_store/client/store.js';
import App from '_components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import '_styles/main.scss';

ReactDOM.hydrate(
  <Provider store={store}>
    <Router>
    <App />
    </Router>
  </Provider>, 
  document.getElementById('app')
);
