const express = require("express");
const app = express();
const expressConfig = require("./config/expressConf");
const handlebarsConfig = require("./config/hanfledarsConfig");
const routes = require('./routes')

expressConfig(app);
handlebarsConfig(app);

app.use(routes)

app.listen(1337);
