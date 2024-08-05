// grab the build in http module 
const http = require('http')

// request from server and response from server 
const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to our home page!')
    }
    // about page
    if(req.url === '/about'){
        res.end('Here is our short history...')
    }
    // resource that does not exist
    //res.end(`<h1>Oops!</h1>
   // <p>We can't seem to find the page you are looking for</p>
   // <a href="/">back home</a>`)
})
    //console.log(req)
    //res.write()
//
server.listen(5000)