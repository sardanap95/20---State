var express = require("express");
const path = require("path");
const port = process.env.PORT || 8080;
var app = express();
app.use(express.static(path.join(__dirname + "/")));
app.listen(port, () => {
  console.log("Server running on port " + port);
});
