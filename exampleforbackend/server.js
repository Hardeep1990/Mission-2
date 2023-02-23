const express = require('express');
const mysql = require('mysql2');
//const Pool = require('mysql2/typings/mysql/lib/Pool');
const app = express();
//const cors = require(cors);
app.use(express.json()); // Middleware added to process the json body params
//app.use(cors());
const connection = mysql.createPool({
  host: 'sg1-ts6.a2hosting.com',
  user: 'missio20_demo',
  password: 'k0tCWe-ixDRw',
  database: 'missio20_demo',
});
// 1. Read all the tasks in the list
app.get('/', (req, res) => {
  connection.query('SELECT * FROM tasks', (error, result) => {
    if (error) {
      console.log(error);
    } else {
      console.log(result);
      res.json(result);
    }
  });
});
// 2. Add a task to the list of tasks
app.post('/', (req, res) => {
  const { description } = req.body;
  connection.query(`INSERT INTO missio20_demo.tasks (description,timestamp) VALUES ('${description}', NOW());
  `, (error, result) => {
    if (error) {
      console.log(error);
    } else {
      console.log(result);
      res.json(result);
    }
  });
});
// 3. Delete a task from list of tasks
// app.delete('/', (req, res) => {
//   console.log('delete request recieved');
//   const { taskID } = req.body;
//   console.log(taskID)
//   connection.query(`DELETE FROM missio20_demo.tasks WHERE task_id = 2;`, (error, result) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log(result);
//       res.json(result);
//     }
//   });
// });
app.listen(4000);