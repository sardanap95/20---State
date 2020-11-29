var express = require("express");
const path = require("path");
const port = process.env.PORT || 8080;
var app = express();
app.use(express.static(path.join(__dirname, "build/")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build/index.html"));
});
app.listen(port, () => {
  const x = path.join(__dirname, "build/");
  console.log(x);
  console.log("Server running on port " + port);
});
