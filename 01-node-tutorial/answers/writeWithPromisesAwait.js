//import fs from "fs";
const {writeFile, readFile} = require('fs').promises;

// create 'writer' function with no parameters
const writer = async () => {

    // create 3 vars that will need to be added to temp.txt file
    const first = 'Hi there!'
    const second = 'Hello Anna!'
    const third = 'This is great!'

    // add try / catch 
    try{
        await writeFile(
            './temporary/temp.txt',
            `Result: ${first}, ${second}, ${third},`, { flag: 'a'}
        )
        // If we have a positive result console log response
        console.log("The file was written successfully!")

    } catch(error){
    //If we do have an error console log it here
    console.log(error)
    }
}
// call the 'writer' function here to show what type it is
//console.log(`Writer result ${writer()}`)

// Now read the file! - Create a second function to read the
// temp.txt file with await logs the result tp the screen
const reader = async () => {

    try{
        // Declare var that holds the value to of the temp.txt file to be read
        const readTempFile =  await readFile('./temporary/temp.txt', 'utf8')

        // console log the result 
        console.log(`Read data, ${readTempFile} ` )

    } catch(error) {
        // console log the error - if case of an error
        console.log(`error, ${error}`)
   }
} 

// call the reader function here to show what type it is and what it dsiplay!
//console.log(`Here is the result for reader: ${reader()}`)

// Create a function that shows both the write and read of a temp.txt file
const readAndWriteFilesAsync = async () => {

    // call the two previous functions with await
    await writer()
    await reader() 
}
// console log these two functions
console.log(readAndWriteFilesAsync())


