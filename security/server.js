const express = require("express");
const mysql = require("mysql2");
const app = express();
// Connects to your own local database
// Replace user & password with your own. Default user is 'root'
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "jetkingdeep18*",
  database: "world",
});

// Route parameter -> code
app.get("/country/:code", (req, res) => {
  console.log("Received a GET request to /");
  const { code } = req.params;
  // Run the SQL query, when you get a request to /
  connection.query(
    `SELECT * FROM country WHERE code = '${code}';`,
    (error, result) => {
      if (error) {
        console.log("Error", error);
        res.send("You' got an error ! " + error.code);
      } else {
        res.send(result[0]);
      }
    }
  );
});
console.log("Server running at port", 4008);
app.listen(4011);
