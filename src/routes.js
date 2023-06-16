const router = require('express').Router()

const homeController = require("./controllers/homeController");
const cubeControler = require('./controllers/cubeController')
const accessryContorller = require('./controllers/accessoryController')
const userController = require('./controllers/userController')

router.use(homeController);
router.use('/cubes', cubeControler)
router.use('/accessory', accessryContorller)
router.use('/user', userController)

router.get('*', (req, res)=> {
    res.redirect('/404')
})

module.exports = router