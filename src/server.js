require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./routers");
const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static("./src/assets"));

server.use(router);

server.listen(8000, () => {
  console.log(`server is running on port 8000`);
});

server.use((req, res) => {
  res.status(404).send("Sorry cant find that!");
});
