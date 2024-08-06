const {createReadStream} = require('fs')

// With high water mark of 200 bytes that node will read w/chunk of the stream
const stream = createReadStream('../content/big.txt','utf8')

stream.on('data', (streamingChunkOfData) => {
 
  let count = 0
 
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