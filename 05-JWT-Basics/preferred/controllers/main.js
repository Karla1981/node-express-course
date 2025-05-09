const jwt = require('jsonwebtoken')
const {BadRequestError} = require('../errors')

//1. create logon
const logon = async (req, res) => {

    const { username, password } = req.body

    // the ID would come from the DB but for now 
    // is just coming from the next line of code
    const id = new Date().getDate()

    if (!username || !password){
        throw new BadRequestError('Please provide email and password')
    }
    // create jwt token - used a fake token for now
    const token = jwt.sign(
        { id, username}, 
        process.env.JWT_SECRET, 
        {expiresIn: '30d'
    })
   res.status(200).json({ msg:'user created', token})   
}
// create hello
const hello = async (req, res) => {

    const luckyNumber = Math.floor(Math.random()*100)

    res.status(200).json({
        msg:`Hello, ${req.user.username}`,
        secret:`Here is your authorize data, your lucky number is ${luckyNumber}`})
   
}
module.exports = { logon, hello }