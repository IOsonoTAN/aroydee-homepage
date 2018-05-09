const axios = require('axios')

module.exports.getDetail = async (ctx) => {
  try {
    const {
      restaurantId
    } = ctx.params

    const {
      data: {
        data: {
          detail: restaurant
        }
      }
    } = await axios.get(`https://api.aroydee-channel.com/v1/restaurants/${restaurantId}`)

    await ctx.render('restaurant/detail', {
      restaurant
    })
  } catch (e) {
    ctx.throw(404, e.message)
  }
}