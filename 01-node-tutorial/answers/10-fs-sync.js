const { readFileSync, wtiteFileSync, writeFileSync } = require('fs')

// read from file A and file B 
const first = readFileSync('./temporary/fileA.txt', 'utf8')
const second = readFileSync('./temporary/fileB.txt', 'utf8')

// display the text from file A and file B
// console.log(first, second)

// write to a file - if the file exists node will overide and write to it 
// the flag is appending the second value to the file
writeFileSync(
    './temporary/result-sync.txt',
    `Here is the new result: ${first}, ${second}`, { flag: 'a'}
)