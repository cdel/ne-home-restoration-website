import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server'

const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3001, () => {
  console.log('server running.....');
})