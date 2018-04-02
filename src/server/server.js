import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '_components/App';

const app = express();
// Tell our server to serve any static content in this directory
app.use(express.static('dist/client'));

app.get('*', (req, res) => {
  res.send(`
    <!doctype html>
    <html>
      <head>
      <title>Getting Started</title>
      <title>Asset Management</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link href="styles/main.css" rel="stylesheet"></head>
      <body>
        <div id="app">${renderToString(<App />)}</div>
      <script type="text/javascript" src="bundle.js"></script></body>
    </html>
  `);
});

app.listen(3001, () => {
  console.log('server running.....');
});