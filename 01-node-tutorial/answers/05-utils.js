// 

// function helloThere
const helloThere = (personsName) => {
    console.log(`Hi ${personsName}`)
}

// In order to share the helloThere function we need to export it like so:
// Or make this file available in 03-module.js we need to export it.
module.exports = helloThere