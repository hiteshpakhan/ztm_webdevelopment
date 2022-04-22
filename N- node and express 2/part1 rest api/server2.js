const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static(__dirname + "/public"))  // __dirname is always equal to the location we are in

app.listen(3000);