const express = require('express');
const cors = require('cors');
// const cors = require('cors');
const app = express();
// Unlike query & route params, you need a additional step here to process Body params
app.use(express.json()); // Middleware added to process the json body params
app.use(cors());
// app.use(cors()); 
// POST request, instead of GET
app.post('/student', (req, res) => {
  console.log('Received a post request to /student');
  console.log(`Got some body params ${JSON.stringify(req.body)}`);
  res.send(`Got some body params ${JSON.stringify(req.body)}`);
});
console.log('Server running at port', 4001);
app.listen(4001);