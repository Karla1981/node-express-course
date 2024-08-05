const {createReadStream} = require('fs')

// With high water mark of 200 bytes that node will read w/chunk of the stream
const stream = createReadStream('../content/big.txt','utf8', { highWaterMark: 200 })
//console.log('I get here')
let count = 0

stream.on('data', (streamingChunkOfData) => {
 
  //count++// come back

  // add the count to streamingChunkOfData
  count+= streamingChunkOfData.length

  // display on the console the data -> 'Hello world'
  console.log(streamingChunkOfData)
  
  // display the total bytes of data received
  console.log(`Received ${count++} bytes of data`)
})
stream.on('end', (result ) => {
  console.log('R', result)
  console.log('There is no more data to received.')
})
// Finally, it should handle the stream 
// “error” event by logging the error to the console
stream.on('error', (error) => {
  console.log(error)
})

/*
  6. Now, change back to the answers directory, and write a program called 16-streams.js. 

  It should create a read stream for the big file (../content/big.txt) with encoding of "utf8" and a highWaterMark of 200. 

  The highWaterMark is the maximum amount of bytes that node will read with each chunk of the stream. 

  The program should initialize a counter to 0. increment 'count' by 1

  Then it should handle the “data” event for the stream by incrementing the counter and logging the event result to the screen. 

  Then it should handle the “end” event by reporting the number of chunks received. 

  Finally, it should handle the stream “error” event by logging the error to the console. 

  Test the program for several values of highWaterMark. 

  You can look at 01-node-tutorial/16-streams.js file to help you as needed.
**/