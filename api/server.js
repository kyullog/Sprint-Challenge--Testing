const express = require("express");

let games = [
  { title: "Pacman", genre: "Arcade", releaseYear: 1980 },
  { title: "Rally-X", genre: "Arcade", releaseYear: 1980 },
  { title: "Super Mario Kart", genre: "Racing", releaseYear: 1992 },
  { title: "Final Fantasy VII", genre: "JRPG", releaseYear: 1997 }
];

const resetGames = () => {
  games = [
    { title: "Pacman", genre: "Arcade", releaseYear: 1980 },
    { title: "Rally-X", genre: "Arcade", releaseYear: 1980 },
    { title: "Super Mario Kart", genre: "Racing", releaseYear: 1992 },
    { title: "Final Fantasy VII", genre: "JRPG", releaseYear: 1997 }
  ];
};

const emptyGames = () => {
  games = 0;
};

const server = express();
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ message: "Hello!" });
});

server.post("/games", async (req, res) => {
  const { title, genre, releaseYear } = req.body;
  if (title && genre && releaseYear) {
    games.push(req.body);
    const gotGame = games[games.length - 1];
    res.status(201).json({ message: "Game added", game: gotGame });
  } else {
    res.status(422).json({ message: "Please use correct format" });
  }
});

server.get("/games", async (req, res) => {
  if (games) {
    res.status(200).json({ games });
  } else {
    res.status(200).json({ games: [] });
  }
});

module.exports = { server, games, resetGames, emptyGames };
