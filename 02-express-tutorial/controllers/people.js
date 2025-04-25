// require statement that gets the people array from '../data'
let { people } = require("../data")

// add person - GET Method - get 'people' data
const getPeople = ("/api/people", (req, res) => {
    console.log(req.body)
    res.status(200).json({ success: true, data: people})
})

// get people - POST Method
const addPerson = ("/api/people", (req, res) => {
    const { name } = req.body

    if (!name) {
        res.status(400)
        .json({ success: false, message: "Please provide a value." });
    } else {
        res.status(201).json({ success: true, person: name });
    }
})

// PUT Method - update data - get by id 
const findById = ("/api/people", (req, res) => {

    const { id } = req.params
    const { name } = req.body
    console.log(id, name)

    // create a person - use people data
    const person = people.find((person) => person.id === Number(id))

    // if person doen't exists
    if (!person) {
        return res
        .status(404)
        .json({success: false, msg:`No person with id ${id}`})
    }
    // create new person
    const newPeople = people.map( (person) => {

        if (person.id === Number(id)){
            person.name = name
        }
        return person
    })
    res.status(200).json({success: true, data: newPeople})
    console.log( newPeople)
})

//Delete Method - we are not expecting anything on the body
const deletePerson = ("/api/people", (req, res) => {
    const { id } = req.params
    const { name } = req.body

    const person = people.find((person) => person.id === Number(id))
    // if person doen't exists
    if (!person) {
        return res
        .status(404)
        .json({success: false, msg:`No person with id ${id}`})
        console.log(req.params.id)
    }
    const newPeople = people.filter((person) => person.id !== Number(id))
    return res.status(200).json({success: true, data: newPeople})
})
module.exports = {getPeople, addPerson, findById, deletePerson };