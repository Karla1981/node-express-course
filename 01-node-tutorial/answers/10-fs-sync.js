const fs = require('fs')

const lines = ['line1', 'line2', 'line3']

fs.writeFileSync(
  './temporary/fileA.txt',
  lines.join('\n'),
  { flag: 'a' }
)

const fileContent = fs.readFileSync('./temporary/fileA.txt', 'utf-8')
console.log(fileContent )

console.log('done with this task')
console.log('starting the next one')

