const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");
const app = express();
const expressConfig = require("./config/expressConf");
const handlebarsConfig = require("./config/hanfledarsConfig");
const homeController = require("./controllers/homeController");
const cubeControler = require('./controllers/cubeController')

expressConfig(app);
handlebarsConfig(app);

app.use(homeController);
app.use('/cubes', cubeControler)
app.get('*', (req, res)=> {
    res.redirect('/404')
})

app.listen(1337);
