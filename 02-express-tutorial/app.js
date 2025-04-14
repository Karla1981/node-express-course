// Import the express module
const express = require('express')

// Creation of the app as returned from calling express()
const app = express()

// Add data.js
const { products } = require("./data");

// set up static and middleware - express.static()
app.use(express.static('./public'))

// Add app.get() with the URL /api/v1/test
app.get('/api/v1/test', (req, res) => {
    res.status(200).json({ message: "It worked!" })
})
// Add app.get statement for url /api/v1/products
app.get('/api/v1/products', (req, res) => {
    res.json(products)
})

// Retrieve a particular product by ID
// Add app.get statement for url /api/v1/products/:productID
app.get('/api/v1/products/:productID', (req, res) => {

   // set id to be find equal to req.params
    const idToFind = parseInt(req.params.productID)

    // use find function to compare and find 'id to find'
    const product = products.find((p) => p.id === idToFind)

    // The user may request a product that is not there
    if (!product){
        return res.status(404).json({message: 'That product was not found.'})
    }
    // display in json form the 'id to find'
    res.json(product)
})

// Query to be tested: /api/v1/query?search=al&limit=5
app.get('/api/v1/query', (req, res) => {
    
    // Set search and limit to req.query
    const { search, limit } = req.query
    let sortedProducts = [...products]

    if (search){
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if (sortedProducts.length < 1){
        return res.status(200).send("No products matched your search.")
    }
    res.status(200).json(sortedProducts)
})

// An app.all statement after these to handle 
// page not found conditionserror 404
app.all('*', (req, res) => {
    console.log('Error page')
    res.status(404).send('<h4>Resource not found</h4>')
})
// An app.listen statement to tell the server to 
// listen for requests on a particular port
app.listen(3000, (req, res) => {
    console.log('Server is listening on port 3000')
});