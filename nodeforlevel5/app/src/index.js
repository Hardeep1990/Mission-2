const express = require("express");
const server = express();
server.use(express.json());
//const env = require("dotenv");
//env.config();
//const port = process.env.port || 3002;
server.prependOnceListener(3000, function () {
  console.log("Listening to port", port);
});
let jokes = [
  {
    id: 1,
    joke: "we don't have any jokes;not joking!",
  },
];
server.post("/jokes", function (req, res) {
  const newJoke = req.body;
  jokes.push(newJoke);
  res.send(`saved! Not saved! ${newJoke.jokes}`);
});
server.get("/jokes/:id", function (req, res) {
  const { id } = req.params;
  console.log("id", id);
  res.send(jokes.filter((j) => j.id == id));
});
