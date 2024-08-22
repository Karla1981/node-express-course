const express = require('express')
const app = express()
// import people from data
let { people } = require("./data")
const logger = require('./logger')

//2. routes/people.js
const router = express.Router('./routes/people')
    
//const router = express.Router('/routes/people')
//const authorize = require('./authorize')

//- method app.use will invoke logger in each route
//- NOTE: use sould go first, before get or it won't display
//app.use([logger, authorize])

//2. routes/people.js
app.use('./api/v1/people', router)

// 1. Console log url, method and time using logger
app.use(logger)

// static assets - JS script example
app.use(express.static('./methods-public'))

// 2. Implement API people- Parse incoming req itom js object
app.use(express.urlencoded({ extended: false }))

// parse json
app.use(express.json())



// req -> middleware -> res
// middleware function
app.get('/',(req, res) => {
    console.log('Home page!')
    res.send('Home Page')
  })
  app.get('/about',(req, res) => {
    console.log('About page!')
    res.send('About Page')
  })




/**
  
//2. api/v1/people - Get method -> read data - /api/v1/people
app.get('/api/v1/people', (req, res) =>{
    //res.json({ data: people })
    res.status(200).json({success: true, data: people})
})
// implement app.post - get people from data
app.post('/api/v1/postman/people', (req, res) => {

    // req.body
    const { name } = req.body
    console.log(name)
    
    // check if there is a name
    if (!name){
        // if not return a json error
        return res.status(400).json({ success: false, msg: 'Please provise name value'})
    } else {
        // if there is a name - add this entry to the people array
        // as follows: 
        
            //people.push({ id: people.length + 1, name: req.body.name });
            //res.status(201).json({ success: true, name: req.body.name });
        
        res.status(201).json({ success: true, data:[...people, name ] })
    }

    //res.status(201).json({success: true, data: people})
})

*/







// insert dataclear
app.post('/login', (req, res) => {

   const {name} = req.body

    if(name) {
        return res.status(200).send(`Welcome ${name}`)
    }else{
        res.status(400).json({ success: false, message: 'Please provide a name' });

}
})
app.listen(3000, (req, res) =>{
    console.log('server listening on port 3000')
})