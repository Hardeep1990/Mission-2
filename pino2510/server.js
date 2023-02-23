const express = require('express');
const app = express();
const pinoHttp = require('pino-http');
const pino = pinoHttp();
app.use(pino); // added pino library as a logger
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/sebin', (req, res) => {
  res.send('Hello Sebin!');
});
app.get('/sebin/hardeep', (req, res) => {
    res.send('Hello Hardeep!');
  });
app.listen(4001);