const {writeFile, readFile, appendFile} = require('fs').promises;

  writeFile(
        './temporary/temp.txt', 'This is for ')
        .then(() => {
            
            console.log('line 1')

            // Now return the promise
            return appendFile('./temporary/temp.txt', 'the temp ');
        })
        // Append 3rd line to temp.txt file
        .then( () => { 

            console.log('line 2')
            console.log('line 3')
            
            return appendFile('./temporary/temp.txt' ,' file') 
        })
        //console.log('line 2')

       //read file 
        .then( () => {
            console.log('Reading the temp.txt file')
            
            // Return the reading file
            return readFile('./temporary/temp.txt', 'utf8')
        })
        .then( (loadData) => {

            // Console the data to the screen
            console.log(loadData)
        })
        .catch((error) =>{

            // Display the error
            console.log(`An error has occurred: ${error}`)
        })
       