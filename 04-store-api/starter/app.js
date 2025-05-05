require('dotenv').config()
// async errors - package
require('express-async-errors')




const express = require('express')
const app = express()

const connectDB = require('./db/connect')
const productsRouter = require('./routes/products')

// errors middleware
const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')

// we are not using this middleware function on the app 
// we are just doing it for practice 
app.use(express.json())

// routes


app.get('/', (req, res) => {
    res.send('<h1>Store API</h1><a href="/api/v1/products">Produts Route</a>')
})
// base routing
app.use('/api/v1/products', productsRouter)

// produts route


app.use(notFoundMiddleware)
app.use(errorMiddleware)

const port = process.env.PORT || 3000

const start = async () => {
    try{
        // connect to DB
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log( `Server is listenong on port ${port}...`))
    } catch(error) {
        console.log(error)
    }
}
start()



