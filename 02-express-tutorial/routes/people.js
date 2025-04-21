const express = require("express");
const router = express.Router();

const { getPeople, addPerson, findById, deletePerson } 
    = require("../controllers/people.js")

// GET Method - getPeople
router.get('/', getPeople)
// POST Method - addPerson
router.post('/', addPerson)
//PUT Method - findById
router.get('/:id', findById)
// PUT Method - update data - change data
router.put('/:id', findById)
// DELETE Method deletePerson
router.delete('/:id', deletePerson)

module.exports = router