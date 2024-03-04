// create array to show a different way of exoporting and makind available a module
module.exports.items = ['item1', 'item2']


// function 'person'
const person = {
    name: 'Mia',
}

//Export what's inside this file 'person and items' to make it available in 03-module.js
module.exports.personItems = person