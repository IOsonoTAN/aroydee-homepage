const combineRouters = require('koa-combine-routers')

const pages = require('./pages')

const router = combineRouters([pages])

module.exports = router
