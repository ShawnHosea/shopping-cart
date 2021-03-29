const layout = require('@architect/views/layout.js')
let arc = require('@architect/functions')
let data = require('@begin/data')

exports.handler = arc.http.async(http)

async function http (req) {

  let product = arc.static('product.jpg')

  // let result = await data.get({
  //   table: 'shopping-cart'
  // })

  let body = layout({ 
    content: 
    `<div class="wrapper">
      <div class="products">
        <div class="product">
          <img height='200px' alt='logo' src="${product}">
          <p>Item 1</p>
          <form action='cart' method='POST' id='nameform'>
          <select name="quantity" id="quantity" placeholder="qty"/>
            <option value="2">Qty: 2</option>
            <option value="4">Qty: 4</option>
            <option value="6">Qty: 6</option>
            <option value="8">Qty: 8</option>
          <input type="hidden" name="productId" value='001'>
          <button class="btn">Add to Cart</button>
          </form>
        </div>
        <div class="product">
          <img height='200px' alt='logo' src="${product}">
          <p>Item 2</p>
          <form action='cart' method='POST'>
          <select name="quantity" id="quantity" placeholder="qty"/>
            <option value="2">Qty: 2</option>
            <option value="4">Qty: 4</option>
            <option value="6">Qty: 6</option>
            <option value="8">Qty: 8</option>
          <input type="hidden" name="productId" value='002'>
          <button class="btn">Add to Cart</button>
          </form>
        </div>
        <div class="product">
          <img height='200px' alt='logo' src="${product}">
          <p>Item 3</p>
          <form action='cart' method='POST'>
          <select name="quantity" id="quantity" placeholder="qty"/>
            <option value="2">Qty: 2</option>
            <option value="4">Qty: 4</option>
            <option value="6">Qty: 6</option>
            <option value="8">Qty: 8</option>
          <input type="hidden" name="productId" value='003'>
          <button class="btn">Add to Cart</button>
          </form>
        </div>
      </div>
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

