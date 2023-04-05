const path = require("path");
const express = require("express");
const app = express();
const helmet = require("helmet");
const bodyParser = require("body-parser");

app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

// serve up static files
// (app).use(express.static('public'));

// parse json and urlencoded data into req.body
app.use(express.json());
app.use(express.urlencoded());
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000);
