const layout = require('@architect/views/layout.js')
let arc = require('@architect/functions')
let data = require('@begin/data')

exports.handler = arc.http.async(http)

async function http (req) {

  let result = await data.get({
    table: 'shopping-cart'
  })

  let body = layout({ 
    content: 
    `<div class="wrapper">
      <h1>Begin Merch</h1>
      <p> Welcome to the Store </p>
      <div class="products">
        <div class="product">
          <p>Item 1</p>
          <form action='cart/' method='POST'>
          <input type="text" name="quantity"/>
          <input type="hidden" name="productId" value='001'>
          <button>Add to Cart</button>
          </form>
          <form action='cart/delete' method='POST'>
          <input type="hidden" name="productId" value='001'>
          <button>Remove from Cart</button>
          </form>
        </div>
        <div class="product">
          <p>Item 2</p>
          <form action='cart/' method='POST'>
          <input type="text" name="quantity"/>
          <input type="hidden" name="productId" value='002'>
          <button>Add to Cart</button>
          </form>
          <form action='cart/delete' method='POST'>
          <input type="hidden" name="productId" value='002'>
          <button>Remove from Cart</button>
          </form>
        </div>
        <div class="product">
          <p>Item 3</p>
          <form action='cart/' method='POST'>
          <input type="text" name="quantity"/>
          <input type="hidden" name="productId" value='003'>
          <button>Add to Cart</button>
          </form>
          <form action='cart/delete' method='POST'>
          <input type="hidden" name="productId" value='003'>
          <button>Remove from Cart</button>
          </form>
        </div>
      </div>
      <hr>
      <p>This is your order</p>
      <p>${JSON.stringify(result)}</p>

      <p>${result.map(item => `<li>${JSON.stringify(item.cartItem)}</li>`).join('')}</p>
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

