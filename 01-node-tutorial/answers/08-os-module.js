// os node module 
const os = require('os')

const userInformation = os.userInfo()
console.log(userInformation)


// create object
const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMemory:os.totalmem(),
    freeMemory:os.freemem()
}
//console log the object
console.log(currentOS)
