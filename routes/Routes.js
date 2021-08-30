const Express = require('express')
const Routes = Express.Router()

//Compo
const UserControllers = require('../controllers/Users')
const SequelizeControllers = require('../controllers/sequelize')


Routes.get('/', (req, res) => {
    res.send('ini index')
})

Routes.get('/products', (req, res) => {
    res.send('ini pro')
})

Routes.post('/login', UserControllers.Login)
Routes.post('/register', UserControllers.Register)
Routes.get('/sequelize', SequelizeControllers.Tester)


module.exports = Routes