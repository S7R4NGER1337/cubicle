const express = require("express");
const app = express();
const expressConfig = require("./config/expressConf");
const handlebarsConfig = require("./config/hanfledarsConfig");
const routes = require("./routes");
const dbConnect = require("./config/dbConfig");

dbConnect()
  .then(() => console.log("Db connected"))
  .catch((err) => {
    console.log("Db err:", err);
  });

expressConfig(app);
handlebarsConfig(app);

app.use(routes);
app.listen(1337);
