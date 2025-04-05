const { createReadStream } = require('fs');
    
    // Set count equals zero.
    let count = 0;

    // Set up stream.
    const stream = createReadStream('../content/big.txt',{encoding: 'utf8',highWaterMark: 200});

    // Stream - listent to data events.
    stream.on('data', (chunk) => {

       // Add 1 to count each time a data event occurs.
        count++;

        // Display data count in chunks.
        console.log(`chunk: ${count}, chunks`);
  
        // Display bytes of data received.
        console.log(`Received ${chunk.length} bytes\n`);
   
    })
    // Display the count of chunks received.
    stream.on('end', () => {
        console.log(`\nTotal of chunks received: ${count}`);
    })
    // Handle error event
    stream.on('error',(e) => {
        console.log(`This errror happended: ${e}`);
    });
