const { writeFile, readFile } = require("fs").promises; 

console.log('Write to file first line.')
writeFile('./content/temp.txt', 'write line 1\n', {flag: 'a'} )
.then(() => { 
    console.log('Write to file second line.') 
    return  writeFile('./content/temp.txt', 'write line 2\n', {flag: 'a'})
})  
.then(() =>{  
    console.log('Write to file third line.') 
    return writeFile('./content/temp.txt', 'write line 3\n', {flag: 'a'})   
}) 
.then((result) =>{   
    console.log('Read file.')
    return readFile('./content/temp.txt', 'utf8')
}).then((result ) =>{
    console.log('Display result: ',result);
})
.catch((error) => {  
    console.log("An error occurred: ", error)  
})

