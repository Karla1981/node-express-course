const express = require('express')
const app = express()
//const { people } = require("./data")

//NO RENDERING*
const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)
    next()
  }
  
  app.get('/', logger, (req, res) => {
    res.send('Home')
  })
  app.get('/about', logger, (req, res) => {
    res.send('About')
  })

// api/v1/people
app.get('/api/v1/people', logger, (req, res, next) =>{
   console.log( res.json('people'))
    res.status(200).json({success:true, data:people})
    console.log(req.user)
    next()
})

/* WEEK3 Assignmet
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

    if(!product){
     return res.status(404).json({ message: "That product was not found."})
    }
    res.json(product)
})

app.get('/api/v1/products', (req, res) =>{
    res.json(products)
})

app.get('/api/v1/test', (req, res) =>{
    res.json({ message: "It worked!"})
})

app.all('*', (req, res) =>{
    res.status(404).send('resource not found')
})
**/