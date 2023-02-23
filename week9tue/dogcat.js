
const http = require('http');
const server = http.createServer((request, response) => {
    if (request.url === '/cat') {
        response.setHeader('Content-Type','text/html');
      response.write('<img src = "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg" />');
      response.end();
    }
      else if (request.url === '/dog') {
        response.setHeader('Content-Type','text/html');
        response.write('<img src = "https://image.shutterstock.com/image-photo/happy-puppy-dog-smiling-on-260nw-1799966587.jpg" />');
        response.end();
      }
    }
);
server.listen(4002);
