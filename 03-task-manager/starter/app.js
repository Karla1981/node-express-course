const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

//middleware - allows us to get the app 
app.use(express.static('./public'))
//middleware - allows us to get json
app.use(express.json())

// base path for all the functions
app.use('/api/v1/tasks', tasks)

// this handles the 404 response
app.use(notFound)

app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`App is listening on port ${port}...`))
    } catch (err) {
        console.log(err)
    }
}
start()

