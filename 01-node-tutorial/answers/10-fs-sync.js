const {readFileSync, writeFileSync} = require("fs").promises;

console.log('start')

// create 'writer' function with no parameters
const writer = async () => {

    // create 3 vars that will need to be added to temp.txt file
    const first = 'Hi there!'
    const second = 'Hello!'
    const third = 'This is great!'

    // add try / catch 
    try{
        await writeFileSync(
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
// Create a second function to read the temp.txt file
const reader = async () => {

    try{
        // Declare var that holds the value to of the temp.txt file to be read
        const readTempFile =  await readFileSync('./temporary/temp.txt', 'utf8')

        // console log the result 
        console.log(`Read data, ${readTempFile} ` )

    } catch(error) {
        // console log the error - in case of an error
        console.log(`error, ${error}`)
    }
} 
// Create a function that shows both the write and read of a temp.txt file
const readAndWriteFilesAsync = async () => {

    // call the two previous functions
    await writeFileSync()
    await readFileSync() 
}
// console log these two functions
console.log(readAndWriteFilesAsync())