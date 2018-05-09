require('dotenv').config()

const { port } = require('./src/config')
const app = require('./src')

app.listen(port, () => {
  console.log(`application is running on port ${port}`)
})