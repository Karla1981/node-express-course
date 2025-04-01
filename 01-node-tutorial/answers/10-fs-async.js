const { readFileSync, writeFileSync } = require('fs');

// read from file
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second);

// write to file temp.txt
writeFileSync(
    './temporary/fileA.txt',
    `Here is the reult: ${first}, ${second}`,
    {flag: 'a'});

// read fileA and show it on the console
const fileA = readFileSync('./temporary/fileA.txt','utf8');
console.log(fileA);