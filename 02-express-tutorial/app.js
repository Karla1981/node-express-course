const express = require('express')
const app = express()
const { products } = require("./data")// data database

// set up static and middleware
app.use(express.static('./public'))

// Set up route for searching filtered and with a limit items
app.get('/api/v1/query', (req, res) => {

    //access the answers
    const {search, limit} = req.query
    let sortedProducts = [...products]

    if (search){
        sortedProducts = sortedProducts.filter((product) =>{
            return product.name.startsWith(search)
        })
    }
    if (limit){
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if (sortedProducts.length < 1){
        return res.status(200).send('No products matched your search')
    }
    res.status(200).json(sortedProducts)
})

//app.get() with route parameter -> :productID
app.get('/api/v1/products/:productID', (req, res) =>{
    //res.json(req.params)
    const { productID } = req.params
    const idToFind = parseInt(req.params.productID)
    const product = products.find((p) => p.id === idToFind)

    // logic for when product is not there with response
    if(!product){
     return res.status(404).json({ message: "That product was not found."})
    }

    //console.log(product)
    res.json(product)
})

//app.get() to get the data from the database
app.get('/api/v1/products', (req, res) =>{
    res.json(products)
})

// app.get() test
app.get('/api/v1/test', (req, res) =>{
    res.json({ message: "It worked!"})
})

// app .all
app.all('*', (req, res) =>{
    res.status(404).send('resource not found')
})

app.listen(3000, (req, res) =>{
    console.log('server listening on port 3000')
})

console.log('Express Tutorial')
