const express = require('express')
const app = express()
const peopleRouter = require("./routes/people.js")
const { products, people } = require("./data");
const logger = require('./logger')
const router = require('./routes/people.js');

//w4 parse form data
app.use(express.urlencoded({ extended: false }));
// parse js data
app.use(express.json());

app.use("/api/people", peopleRouter);
app.use('/api',logger)

app.get('/api/people', (req,res) => {
    res.status(200).json({success: true, data: people})
})

app.post('/api/people', (req, res) => {
    const name = req.body
    if(!name){
        return res.status(400)
        .json({ success: false, msg: "Please provide a name" });
    }
    res.status(201).json({ success: true, person: req.body.name })
})

app.use(express.static('./methods-public'))

app.get('/api/v1/test',(req, res) => {
    res.status(200).json({ message: "It worked!" })
})

app.get('/api/v1/products', (req, res) => {
    res.json(products)
})

app.get('/api/v1/products/:productID', (req, res) => {

   // set id to be find equal to req.params
    const idToFind = parseInt(req.params.productID)

    const product = products.find((p) => p.id === idToFind)

    if (!product){
        return res.status(404).json({message: 'That product was not found.'})
    }
    res.json(product)
})

app.get('/api/v1/query',(req, res) => {
    
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

app.all('*',(req, res) => {
    console.log('Error page')
    res.status(404).send('<h4>Resource not found</h4>')
})

app.listen(3000, (req, res) => {
    console.log('Server is listening on port 3000')
});