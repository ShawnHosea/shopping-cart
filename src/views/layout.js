const footer = require('./footer')
const header = require('./header')
const main = require('./main')
const arc = require('@architect/functions')

module.exports = function Layout (props) {

 
return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1">
    <title>Begin Shop</title>
    
    <!-- Styles -->
  
    <link rel="stylesheet" type="text/css" href="${arc.static('/styles/custom.css')}">
</head>
<body>
    <div>
        ${header(props)}
        ${main(props)}
        ${footer(props)}

    </div>
</body>
</html>
`;
}


       
