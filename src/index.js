const express = require('express')
const handlebars = require('express-handlebars')
const app = express()

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}))
app.set('view engine', 'hbs')
app.set('views', 'src/views')


app.get('/', (req, res) => {
    res.send('works')
})

app.
app.listen(1337)