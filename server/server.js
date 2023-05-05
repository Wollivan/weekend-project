const express = require("express");
const cors = require("cors"); // middleware - think of it as the bridge between the client and server
require("dotenv").config();
const app = express();
app.use(cors());

const PORT = process.env.PORT;

const data = require("./data.json");

app.get("/", function (request, response) {
  response.json("You can use the /family endpoint to retrieve data about my family.");
});

app.get("/family", function (request, response) {
  response.json(data);
});

app.listen(PORT, function () {
  console.log("Server is listening on PORT " + PORT);
});
