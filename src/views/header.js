const arc = require('@architect/functions')

module.exports = function header(props) {
    
    let logo = arc.static('logo.svg')
  
    let body = `
    <div class='Header'>
        <div class='HeaderGroup'>
            <div class="headLogo">
                <a href="/"><img height='40px' alt='logo' src="${logo}"></a>
            </div>
            <div class="headBtn">
                <a href="/cart"><button>Cart</button></a>
            </div>
        </div>
    </div>`

    return body 
   
}

    