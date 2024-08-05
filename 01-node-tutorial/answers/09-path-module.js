// 
const path = require('path')
//display separator
console.log(path.sep)

// get the file path
const filePath = path.join('/answers')
console.log(filePath)

// get the base name of the file
const base = path.basename(filePath) 
console.log(base)

// get the absolute file path 
const absolute = path.resolve(__dirname, 'answers')
console.log(absolute)