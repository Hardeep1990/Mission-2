const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();
app.use(cors());
const pool = mysql.createPool({
  host: "sg1-ts6.a2hosting.com",
  user: "missio20_team4",
  password: "2{g}.L13I.r9",
  database: "missio20_team4",
});
app.get("/students/:id", (req, res) => {
  // const id = req.params.id;
  const { id } = req.params;
  pool.execute(
    "SELECT studentTable.name as student_name,studentTable.school,teacher.name as techer_name,studentTable.course,studentTable.date_of_birth,studentTable.profile_pic,studentTable.contact_number,studentTable.email FROM studentTable JOIN teacher ON teacher.teacher_id = studentTable.teacher_id WHERE student_id = ?;",
    [id],
    (error, result) => {
      if (error) {
        console.log(error);
      } else {
        console.log(result);
        res.json(result[0]);
      }
    }
  );
});
app.listen(4002);
