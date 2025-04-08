const { writeFile, readFile } = require("fs").promises;

// Create an async function called writer.
const writer = async () => {
    const text1 = 'This is a\n';
    const text2 = 'new\n';
    const text3 = 'line.\n'

    try{
       await writeFile(
            './content/temp.txt',
            `Here is the reult for all 3 texts:\n ${text1} ${text2} ${text3} `);
    } catch(error) {
        console.log("An error occurred: ", error)
    }
}
// Create async function called reader.
const reader = async () => {
    const tempFileRead = await readFile('./content/temp.txt', 'utf8');

    console.log(`temp file reads: ${tempFileRead}`);
}
console.log('temp file reads:', reader());
// create a readWrite function 
const readWrite = async () => {

    // call the two fucntions in order.
   writer(); 
   reader();
}
// call readWrite function
readWrite();