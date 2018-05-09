const Router = require('koa-router')
const { restaurant } = require('../controllers')

const router = new Router()

router.get('/restaurants/:restaurantId', restaurant.getDetail)

module.exports = router
