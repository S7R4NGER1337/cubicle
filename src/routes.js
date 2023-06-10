const router = require('express').Router()

const homeController = require("./controllers/homeController");
const cubeControler = require('./controllers/cubeController')

router.use(homeController);
router.use('/cubes', cubeControler)
router.get('*', (req, res)=> {
    res.redirect('/404')
})

module.exports = router