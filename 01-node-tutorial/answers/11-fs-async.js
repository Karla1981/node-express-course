// asyncrhonous
const { clear } = require('console')
const {readFile, writeFile } = require('fs')

//
readFile('./temporary/fileB.txt', 'utf8', (err, result) => {
    if(err) {
        console.log(err)
        return
    }
    //console.log(result)

//
const first = result
readFile('./temporary/fileB.txt', 'utf8', (err, result) =>{ 
if (err){
    console.log(err)
        return
    
}
const second = result 
writeFile(
    './temporary/output.txt',
    `Here is the result: ${first}, ${second} `,
    (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        console.log(result)
    }
)

})
})