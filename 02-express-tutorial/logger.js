//w4 - logger function
const logger = (req, res, next) => {

    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()

    console.log(method, url, time)
    //res.send(method, url, time)

    next()
}
module.exports = logger;