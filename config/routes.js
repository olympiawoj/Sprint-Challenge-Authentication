const axios = require("axios");
const db = require("../database/dbConfig.js");
const { authenticate } = require("../auth/authenticate");

module.exports = server => {
  server.post("/api/login", login);
  server.get("/api/jokes", authenticate, getJokes);
};

function login(req, res) {
  // implement user login
}

function getJokes(req, res) {
  const requestOptions = {
    headers: { accept: "application/json" }
  };

  axios
    .get("https://icanhazdadjoke.com/search", requestOptions)
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(err => {
      res.status(500).json({ message: "Error Fetching Jokes", error: err });
    });
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}
