var express = require("express");
const path = require("path");
var app = express();
app.use(express.static(path.join(__dirname + "/")));
app.listen(process.env.PORT || 8080);
