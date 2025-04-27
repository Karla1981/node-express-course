const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()

//middleware - allows us to get json
app.use(express.json())

// base path for all the functions
app.use('/api/v1/tasks', tasks)

//routes
app.get('/hello', (req, res) => {
    res.send('Taks manager app.')
})

const port = 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`App is listening on port ${port}...`))
    } catch (err) {
        console.log(err)
    }
}
start()

