module.exports = function footer() {
    let date = new Date().getFullYear()
    
    return `
        <div class="footer">
            <span>© ${date} serverless shopping cart example | by </span>
            <a href="https://begin.com/"  target="_blank">Begin</a>
        </div>
        `
    }
        
        
               
        
    