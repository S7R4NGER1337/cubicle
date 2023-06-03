const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");
const app = express();
const expressConfig = require("./config/expressConf");
const handlebarsConfig = require("./config/hanfledarsConfig");
const homeController = require("./controllers/homeController");

expressConfig(app);
handlebarsConfig(app);

app.use(homeController);

app.listen(1337);
