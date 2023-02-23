const express = require('express');
const { routeHandler } = require('./index')
const app = express();
/*
app.get('/', (req, res) => {
  res.send('Hello World from express');
});
*/
app.get('/', routeHandler);
app.listen(4000);
console.log('server running @ 4000');