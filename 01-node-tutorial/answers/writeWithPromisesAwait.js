const { writeFile, readFile } = require("fs").promises;

//create an async function called writer
const writer = async () => {
    const text1 = 'This is a\n';
    const text2 = 'new\n';
    const text3 = 'line.'

    try{
        result = await writeFile(
            './content/temp.txt',
            `Here is the reult for all 3 texts: ${text1} ${text2} ${text3} `, {flag: 'a'});
    } catch(error) {
        console.log("An error occurred: ", error)
    }
}
console.log('writer 1')
//result = writer();//You get back a promise

// create async function called reader
const reader = async () => {
    const tempFileRead = await readFile('./content/temp.txt', 'utf8');

    console.log(`temp file reads: ${tempFileRead}`);
}
console.log('read 2')
//reader();

// create a readWrite function 
const readWrite = async () => {
    result = writer();//You get back a promise
    return reader()
}
console.log('third!')
readWrite();