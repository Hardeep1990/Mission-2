// imports the http module into our program.
const http = require('http');
// creates a server
// creates a server
const server = http.createServer((request, response) => {
    if (request.url === '/api/greet') {
      console.log('Got a new request to /hardeep'); //localhost4000--so on/hardeep
      response.write('thanks for visiting on this url');
      response.end();
    }
  });
// Start the server and keep listening to port 4000
server.listen(4012);
// RUN THE CODE IN THE TERMINAL
// Check you are in the right folder with the `ls` command
// Run `node server.js`