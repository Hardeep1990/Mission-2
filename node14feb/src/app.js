const express = require("express");
const server = express();
server.use(express.json());
//const env = require('dotenv');
//env.config();
//const PORT = process.env.PORT || 3002;
const PORT = 3002;
server.listen(3000, function () {
  console.log("listening to port", PORT);
});
let jokes = [
  {
    id: 1,
    joke: "we don't have any jokes; not joking!",
  },
];
server.get("/jokes", (req, res) => {
  res.send(jokes);
});
server.post("/jokes", function (req, res) {
  const newJoke = req.body;
  jokes.push(newJoke);
  res.send(`saved! Not saved! ${newJoke.joke}`);
});
server.get("/jokes/:id", function (req, res) {
  const { id } = req.params;
  console.log("id", id);
  res.send(jokes.filter((j) => j.id == id));
});
