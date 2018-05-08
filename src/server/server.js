import express from 'express';
import React from 'react';
import {Provider} from 'react-redux';
import {configureStore} from '_store/client/store.js';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import {createState} from '_utilities/createState';
import App from '_components/App';

const PORT = process.env.PORT || 3001;
let store;

const app = express();
// Tell our server to serve any static content in this directory
app.use(express.static('dist/client'));

app.get('*', (req, res) => {
  // get the state from our redux store.
  const preloadedState = store.getState();
  const html = `${renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{name: 'hi'}}>
        <App />
      </StaticRouter>
    </Provider>
    )}`;
  // send back pre-rendered html with preloaded state.
  res.send(renderFullPage(html, preloadedState));
});

createState().then(state => {
  store = configureStore(state);
  app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}...`);
  });
});

function renderFullPage(html, preloadedState) {
  const page = `
  <!doctype html>
  <html>
    <head>
    <title>Getting Started</title>
    <title>Asset Management</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="styles/main.css" rel="stylesheet"></head>
    <body>
      <div id="app">${html}</div>
    <script>
      // WARNING: See the following for security issues around embedding JSON in HTML:
      // http://redux.js.org/recipes/ServerRendering.html#security-considerations
      window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
    </script>
    <script type="text/javascript" src="bundle.js"></script></body>
  </html>`;
  return page;
}