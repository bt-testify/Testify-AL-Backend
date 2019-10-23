const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const authRouter = require("../users/auth-router.js");
const usersRouter = require("../users/users-router.js");
const testsRouter = require("../tests/tests-router.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors({ origin: '*' }))

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);
server.use("/api/tests", testsRouter);

server.get("/", (req, res) => {
    res.send("It's alive!");
});

module.exports = server;