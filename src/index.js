const fs = require('fs')
const path = require('path')
const Koa = require('koa')
const morgan = require('koa-morgan')
const render = require('koa-ejs')
const serve = require('koa-static')
const router = require('./routes')

const app = new Koa()

app.use(morgan('dev'))
app.use(serve('./public'))

render(app, {
  root: path.join(__dirname, 'views'),
  layout: false,
  viewExt: 'html',
  cache: false,
  debug: false
})

app.use(router)

module.exports = app