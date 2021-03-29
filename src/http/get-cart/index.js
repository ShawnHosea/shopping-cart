const layout = require('@architect/views/layout.js')
let arc = require('@architect/functions')
let data = require('@begin/data')

async function route(req) {

  let result = await data.get({
    table: "shopping-cart",
    key: req.body.productId
  })


  let body = layout({ 
    content: 
    `<div class="wrapper">
      <p>This is your order</p>
      <p>${JSON.stringify(result, null, 2)}</p>
      <p>${result.map(item => `<li>${JSON.stringify(item.cartItem)}</li>
      <form action='cart/delete' method='POST'>
      <input type="hidden" name="productId" value=${item.key}>
      <button class="btn">Remove from Cart</button>
      </form>`).join('')}</p>
     
    </div>
    `
  })
  
  return {
    statusCode: 200,
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8'
    },
    body
  }
}

exports.handler = arc.http.async(route)