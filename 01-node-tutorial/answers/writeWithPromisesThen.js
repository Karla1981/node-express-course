const {writeFile, readFile} = require('fs').promises;
/** 
//const first = 'this is for'
const second = ' temp'
const third = ' file!!'

  writeFile(
        './temporary/temp.txt',
        'Here is the result-async with .then() first text:')
        .then((response) =>{
            // now return the promise
            return response;
            //console.log(writeFile)
            //return writeFile;

        }).then(writeFile('./temporary/temp.txt', `second text: ${second}`)
        .then((response)=>{
            return response; 
            //console.log(writeFile)
        }))

        .then(writeFile('./temporary/temp.txt', `third text: ${third}`)
        .then((response)=>{
            return response; 
            //console.log(writeFile)
        }))
       //reda file 
        .then(readFile('./temporary/temp.txt', 'utf8').then( (response)=>{
            return response
        }).catch((error) =>{

            // display the error
            console.log(`An error has occurred: ${error}`)

        }))
        console.log(writeFile)
  

*/

// create 3 new vars that will need to be added to temp.txt file
const first = "Hi this "
const second = "shows the"
const third = "async file with then!"


    writeFile('./temporary/temp.txt',`Result: ${first}, ${second}, ${third}`, 'utf8')

    .then((result) => console.log(result)
    ).catch((e)=>{console.log(`An error has occurred! ${e}`)})





//.then((result) =>{
    //return the writeFile here
        //console.log(result)
        //return writeFile;

    //read file here
//})

   