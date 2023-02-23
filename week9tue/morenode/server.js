const express = require('express');
const app = express();// creates an express server
// takes a path and an arrow function
// similar to the createServer(()) in http module
app.get('/', (request, response)=> {
  response.send('Hello Express');  // don't need to use en function
})
app.get('/dog', (request, response)=> {
    response.send('Hello');  // don't need to use en function
  })
  app.get('/dog/cat', (request, response)=> {
    response.send(' Express');  // don't need to use en function
  })
// starts the server to accept requests from port 4000
app.listen(4000);