var express = require("express");
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 8000;
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"))

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var apiRoutes = require("./controllers/apiRoutes.js");
var htmlRoutes = require("./controllers/htmlRoutes.js");

app.use(apiRoutes);
app.use(htmlRoutes);

app.listen(PORT, function() {
    console.log("Listening on port:%s", PORT);
  });

