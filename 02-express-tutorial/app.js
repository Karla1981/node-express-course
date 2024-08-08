const express = require('express')
const app = express()
const { products } = require("./data")

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
    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
  if (sortedProducts.length < 1){
      return res.satus(200).send('No products matched your search')
  }
  res.status(200).json(sortedProducts)
})

// add an app statement for the url - /api/v1/products - display nothing*
app.get('/api/v1/products/:productID', (req, res) =>{
  
    const { productID } = req.params
    const idToFind = parseInt(req.params.productID);
    const product = products.find((p) => p.id === idToFind)
    
    if(!product ){
        return res.status(404).json({ message: 'That produt was not found' })
    }
    res.json(product)
})

app.get('/api/v1/products', (req, res) =>{
    res.json(product)
})

app.get('/api/v1/test', (req, res) =>{
    res.json({ message: "It worked!" })
})

app.all('*', (req, res) =>{
    res.status(404).send('resource not found')
})

app.listen(3000, () =>{
    console.log('Listening on port 3000')
})