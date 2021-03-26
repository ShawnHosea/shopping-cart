const arc = require('@architect/functions')

module.exports = function header(props) {
    
    let logo = arc.static('logo.svg')
    let loggedIn = props.auth 

    let isloggedOut = `
    <div class='Header'>
        <div class='HeaderGroup'>
            <a href="/"><img height='40px' alt='logo' src="${logo}"></a>
            <a href="/about">How it works</a>
            <a href="/pricing">Pricing</a>
            <a href="/login"><button>Login</button></a>
        </div>
    </div>`

    let isloggedIn = `
    <div class='Header'>
        <div class='HeaderGroup'>
            <a href="/admin"><img height='40px' alt='logo' src="${logo}"></a>
            <a href="/about">Docs</a>
            <a href="/account">Account</a>
            <a href="/logout"><button>Logout</button></a>
        </div>
    </div>`
    
    if (!loggedIn) {
        return isloggedOut 
    } else {
        return isloggedIn
    }

}

    