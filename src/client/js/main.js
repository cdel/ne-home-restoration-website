import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from '_store/store.js';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '_components/App';
import '_styles/main.scss';

ReactDOM.hydrate(
  <Router>
    <App />
  </Router>, 
  document.getElementById('app')
);
