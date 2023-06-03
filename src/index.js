const express = require('express')
const handlebars = require('express-handlebars')
const path = require('path')
const app = express()
const expressConfig = require('./config/expressConf')
const handlebarsConfig = require('./config/hanfledarsConfig')

expressConfig(app)
handlebarsConfig(app)


app.get('/', (req, res) => {
    res.render('index')
})


app.listen(1337)