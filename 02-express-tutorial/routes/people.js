//2. router.get() - api/v1/people - GET method -> read data - /api/v1/people
router.get('./api/v1/postman/people', (req, res) =>{
    //res.json({ data: people })
    res.status(200).json({success: true, data: people})
})
/*

//2. router.post() - api/v1/people - POST method -> insert data - /api/v1/people
router.post('/api/v1/postman/people', (req, res) => {

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
})
**/
module.exports = router