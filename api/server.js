const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const configureRoutes = require("../config/routes.js");

const server = express();

//import routers
const authRouter = require("../auth/auth-router.js");

server.use(helmet());
server.use(cors());
server.use(express.json());

//user routers
server.use("/api", authRouter);

server.get("/", (req, res) => {
  res.send("halloooo this is working");
});

configureRoutes(server);

module.exports = server;
