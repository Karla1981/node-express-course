const {createReadStream} = require('fs')

//var count = 0;
//var highWaterMark = '';

// With high water mark of 200 bytes that node will read w/chunk of the stream
const stream = createReadStream('../content/big.txt','utf8')// { highWaterMark: 200 }

//console.log('I get here')

stream.on('data', (streamingChunkOfData) => {

  //for (highWaterMark = 0; streamingChunkOfData.length; highWaterMark++ )
    //if (streamingChunkOfData[highWaterMark] == 200) count++

  //console.log('and here too ')

  console.log(streamingChunkOfData)
})

//.on('end', function(){console.log(count)})

// Finally, it should handle the stream 
// “error” event by logging the error to the console
stream.on('error', (error) => {
  console.log(error)
})
//}



