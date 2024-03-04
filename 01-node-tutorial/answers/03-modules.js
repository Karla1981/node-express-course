/*
    For the next part, you will write multiple programs. 
    04-names.js, 05-utils.js, 06-alternative-flavor.js, 
    and 07-mind-grenade.js are modules that you load, 
    using require statements, from the 03-modules.js 
    file, which is the main program. 
    Remember that you must give the path name in your require statement, 
    for example: const names = require("./04-names.js");
**/
// Import what we exported from names and utils
const names = require('./04-names')
const helloThere = require('./05-utils')

const personItems = require('./06-alternative-flavor')
console.log(personItems)

// NOTE: here we just need to import the file 07-mind-grenade.js to be able to run what's inside of it 
// because we called the function inside it (07-mind-grenade.js)
require('./07-mind-granade')

// call function
helloThere(`Mila!`)
helloThere(`${names.zoe}!`)
helloThere(`${names.anna}!`)