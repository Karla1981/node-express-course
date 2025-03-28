const { count } = require('console')
const { createReadStream } = require('fs');

// highWaterMark - control size - 200 bytes chunks

const stream = createReadStream('../content/big.txt', 'utf8', {highWaterMark: 200})
const highWaterMark = 5;
console.log(highWaterMark);
let counter = 0;

stream.on('data', (chunks) => {

    while (counter <= highWaterMark){
    console.log(`Chunks of data: ${chunks } Counter: ${ counter}`);
    counter++;
   }
})
stream.on('error', (err) => console.log(err))
