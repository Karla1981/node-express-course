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
        console.log("The file was written successfully!")

    } catch(error){
    
    console.log(error)
    }
}

// Now read the file! 
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
// Create a function that shows both the write and read of a temp.txt file
const readAndWriteFilesAsync = async () => {

    // call the two previous functions with await
    await writer()
    await reader() 
}
// console log these two functions
console.log(readAndWriteFilesAsync())


