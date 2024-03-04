//create basic functionality
// declare 2 variables
const num1 = 4
const num2 = 6

// addVals function 
function addVals() {
    console.log(`The sum is : ${num1 + num2}`)
}

// call the addVals function
// as long as we have a function and we call it inside the same module we do not have
// to export it to make it available in 03-modules.js
addVals()

//Export the add values function to make it available in 03-modules.js
//module.export.addVals = addVals