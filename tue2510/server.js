const express = require('express');
const app = express();
const userData2 = [
  { name: 'Sebin', age: 25, id: 50 },
  { name: 'John', age: 20, id: 63 },
  { name: 'Jane', age: 125, id: 93 },
  { name: 'Mary', age: 12, id: 102 },
];
// localhost:4000/student?name=sebin&color=blue
app.get('/student', (req, res) => {
    console.log('Received a GET request to /student');
    console.log('Got a bunch of query params', req.query);
    res.send(
      `You have asked something about student ${JSON.stringify(req.query)}`
    );
  });
// localhost:4000/v3/user/63. Route param :id => 63
app.get('/v3/user/:id', (req, res) => {
  const { id } = req.params;
  // This will be replaced by a MySQL querry to get the data from the database in sql
  // `SELECT Name, age from user where userid = ${id}`
  const requestedUser = userData2.find((user) => user.id == id);
  if (requestedUser) {
    res.json({
      name: requestedUser.name,
      age: requestedUser.age,
    });
  } else {
    res.statusCode = 400;
    // send() & json()  - both are used to close the requests/sending a response
    // send() - sends response in any format - json, text, html etc
    // json() - sends in the json format.
    res.send('User does not exist');
  }
});
app.listen(4000);