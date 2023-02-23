const express = require('express');
const mysql = require('mysql2');
const { extraRouter } = require('./newRouter.routes');

const app = express();
// 1. Creating a connection to the DB server
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'jetkingdeep18*',
  database: 'world'
});


// Whenever an api call is received, we 2. run the query using
// connection.query -> SQL Query & an arrow fn
app.get('/', (req, res) => {
  connection.query('SELECT * FROM world.city LIMIT 5;', (err, result) => {
    res.send(result);
  });
});
app.get('/city', (req, res) => {
    connection.query(
      `SELECT Name FROM world.city where name like 'A%' LIMIT 5;`,
      (err, resultArray) => {
        const cityList = resultArray.map(city => city.Name);
        res.send(cityList);
      }
    );
  });
  // localhost:4000/color/blue
app.get('/color/:colorName', (req, res) => {
    const colorName = req.params.colorName;
    console.log(colorName)
    res.send(`You wanted ${colorName}`);
  });
 /* app.get(`/country/:code`,(req, res)=>{
   console.log(req.params.code);
   const countryQuery =`SELECT * FROM country WHERE code = '${req.params.code}';`;
   connection.query(countryQuery, (err, resArray)=>{
    res.send(resArray);
   })
    }) */
    app.use('/', extraRouter);

app.listen(4000);