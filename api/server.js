const express = require("express");

const server = express();
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ message: "Hello!" });
});

server.post("/games", (req, res) => {
  const { title, genre, releaseYear } = req.body;
  if (title && genre && releaseYear) {
    res.status(201).json({ message: "Game added" });
  } else {
    res.status(422).json({ message: "Please use correct format" });
  }
});

module.exports = server;
