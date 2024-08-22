const express = require('express')
const app = express()
let { people } = require('./data')

//
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.get('/api/v1/people', (req, res) =>{

    res.status(200).json({success: true, data: people})
   
})

// app is listening on port 3000
app.listen(3000, (req, res) => {
    console.log('app is listening on port 3000')
})


