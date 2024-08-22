// Middleware function - code assignment 
// display method, url, time on console usig logger()
const logger = (req, res, next) =>{
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)
    next()
}
module.exports = logger