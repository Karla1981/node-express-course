//require statement
const express = require('express')
const app = express()
app.use(express.static('./public'))

// data file - array of objects
const { products } = require("./data")
//console.log(products[3])// works 

//



// Simple search using array.slice or array.filter()
app.get('/api/v1/query', (req, res) =>{
    //console.log(req.query)
    const {search, limit} = req.query
    //create an instace of the products* to import products
    let sortedProducts = [...products]

    if(search){
        sortedProducts = sortedProducts.filter((product) =>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    res.status(200).json(sortedProducts)
    //res.send('Hi!')

})

// add an app statement for the url - /api/v1/products - display nothing*
app.get('/api/v1/products/:productID', (req, res) =>{

    const idToFind = parseInt(req.params.productID);
    console.log(idToFind) // NaN

    const product = products.find((p) => p.id === idToFind)
    // if else to check if a value exist or not
    if(!product ){
        console.log('The product was not found')
        //return res.status(404).send('That produt was not found')
        return res.status(404).json({ message: 'That produt was not found' })
    }else{
        res.json(product)
    } 
})

// app.get statement - this works
app.get('/api/v1/test', (req, res) =>{
    res.json({ message: "It worked!" })
})

// Not Found Handler - this works
app.all('*', (req, res) =>{
    res.status(404).send('resource not found')
})

// Is listening on Port 3K
app.listen(3000, () =>{
    console.log('Listening on port 3000')
})



/*
const { products } = require("./data")
//require statement
const express = require('express')
const app = express()
const {product} = require('./data')

app.use(express.static('./public'))

app.get('/api/v1/test', (req, res) =>{
    res.json({ message: "It worked!" })
})


// Q7
app.get('/api/v1/products/:productID', (req, res) =>{

    console.log(req)
    console.log(req.params)
    //res.json(req.params) // ERROR: Cannot set headers after they are sent to the client
    //  at new NodeErro
    const idToFind = parseInt(req.params.productID)
    //const idToFind = products.find((produt) => product.id === 1)
    const product = products.find((p) => p.id === 'idToFind')
    res.json(idToFind)
    console.log(product)

})





 // filter trhough 'products' Data Base
   if(search){
    sortedProducts = sortedProducts.filter((sort)=>{
        return products.name.startsWith(search)
    })
   }






// Not Found Handler
app.all('*', (req, res) =>{
    res.status(404).send('resource not found')
})

// Is listening on Port 3K
app.listen(3000, () =>{
    console.log('Listening on port 3000')
})
**/
/*
API vs SSR
 Video time: 5:33

**/
