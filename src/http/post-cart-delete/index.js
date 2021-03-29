let arc = require('@architect/functions')
let data = require('@begin/data')

async function http(req) {
  console.log(req.body)

await data.destroy({
    table: "shopping-cart",
    key: req.body.productId
  })

  return {
    statusCode: 302,
    location: '/cart'
  }
}

exports.handler = arc.http.async(http)