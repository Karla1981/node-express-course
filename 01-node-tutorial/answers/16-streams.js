const { createReadStream } = require('fs');
/*
// highWaterMark - control size - 200 bytes chunks
const highWaterMark = 200;
//console.log(highWaterMark);
let counter = 0;
const stream = createReadStream('../content/big.txt', 'utf8', {highWaterMark: 200})

stream.on('data', (chunks) => {

    // console.log(`chunks first :  ${chunks}`);
    console.log(`Chunks of data: ${counter.chunks } The number of chunks received: ${ counter}`);
    counter++;
   
})
stream.on('error', (err) => console.log(err))
**/
/** 
// set count equals zero
let highWaterMark = 20;//{ highWaterMark: 200 }
for (count = 0; count <= highWaterMark; count++){
   
    const stream = createReadStream('../content/big.txt', 'utf8');

    //const highWaterMark = 200;
    stream.on('data', (result) =>{
        //console.log(`stream: ${count.stream}`)
        // const counter = count.result;
  
        //display 'hello world plus number
        console.log(result);

        // display 37818 bytes of data
        console.log(`Received  ${result.length} bytes of data.\n`);
   
    })
// console log the error to the console.
stream.on('error', (e) => console.log(e));
}
*/
let highWaterMark = 20;//{ highWaterMark: 200 }
let count = 0;

while (count <= highWaterMark){
    const stream = createReadStream('../content/big.txt', 'utf8');
    stream.on('data', (result) =>{
    
        //display 'hello world plus number
        console.log(result);

        // display 37818 bytes of data
        console.log(`Received  ${result.length} bytes of data.\n`);
    
    })
}
