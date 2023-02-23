const express = require('express');
const mysql = require('mysql2');
const app = express();
// Connects to your own local database
// Replace user & password with your own. Default user is 'root'
const pool = mysql.createPool({
  host: 'localhost',
  user: 'developer',
  password: 'hellomysql',
  database: 'world',
});
app.get('/', (req, res) => {
  console.log('Received a GET request to /');
  // Run the SQL query, when you get a request to /
  pool.query(`SELECT * FROM WORLD.CITY LIMIT 2;`, (error, result) => {
    if (error) {
      console.log('Error', error);
      res.send("You' got an error ! " + error.code);
    } else {
      console.log(result, new Date().toISOString());
      res.send(result);
    }
  });
});
console.log('Server running at port', 4000);
app.listen(4000);