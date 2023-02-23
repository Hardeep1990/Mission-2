const http = require('http');
const { type } = require('os');
const server = http.createServer((req, res) => {
   res.setHeader('Content-Type','text/html');
   res.write('<h1>Welcome to node.js</h1>');
  res.end();
});
server.listen(4000);