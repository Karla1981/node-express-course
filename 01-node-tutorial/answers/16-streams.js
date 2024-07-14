const {createReadStream} = require('fs')

// With high water mark of 200 bytes that node will read w/chunk of the stream
const stream = createReadStream('../content/big.txt','utf8')// { highWaterMark: 200 }

//console.log('I get here')
//let count = 0

 /*
  Received 844450 bytes of data
  There is no more data to received.
 **/

stream.on('data', (streamingChunkOfData) => {
 let count = 0
  /*
    Received 58018 bytes of data
    There is no more data to received.
  **/
 
  // add the count to streamingChunkOfData
  count+= streamingChunkOfData.length

  // display on the console the data -> 'Hello world'
  console.log(streamingChunkOfData)
  
  // display the total bytes of data received
  console.log(`Received ${count} bytes of data`)
})
stream.on('end', () => {
  console.log('There is no more data to received.')
})
// Finally, it should handle the stream 
// “error” event by logging the error to the console
stream.on('error', (error) => {
  console.log(error)
})


