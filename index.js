const express = require("express");
const App = express();
const Cors = require("cors");
const port = process.env.PORT || 4000;
const DateJSON = require("./data.json");

App.use(Cors());

App.get("/", (req, res) => {
  res.send("hello world!!");
});
App.get("/todo", (req, res) => {
  res.send(DateJSON);
});

App.listen(port, () => console.log("running..."));
