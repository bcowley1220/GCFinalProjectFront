const express = require("express");
const app = express();
const port = 8000;

const cors = require("cors");
app.use(cors());
app.use(express.static(__dirname + "/public"));

app.listen(8000, () => {
  console.log("Server started!");
});
