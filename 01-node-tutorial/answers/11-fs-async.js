//
const { writeFile } = require('fs');
console.log("at start");

/*
// read first.txt file
readFile('./content/first.txt','utf8', (err, result) => {
    if (err) {
        console.log(err);
        return 
    }
    console.log(result);
});-----------------------

// write 3 lines to fileB.txt
writeFile(
    './temporary/fileB.txt', 
    `Here is the reult for fileB: ${first}, ${second}`, 
    {flag: 'a'},
    if (err) {
        console.log("This error happened: ", err);
    } else {
    // here you write your next line
    console.log(result);
    });

// read fileB and show it on the console
const fileB = readFileSync('./temporary/fileB.txt','utf8');
console.log(fileB);

*/

//write file function - file path - text - callback function
writeFile("./temporary/fileB.txt", "This is line 1\n", (err, result) => {
  console.log("at point 1");
  if (err) {
    console.log("This error happened: ", err);
  } else {
    // here you write your next line
    console.log(result);
  }
  writeFile("./temporary/fileB.txt", "This is line 2\n", {flag: "a"}, (err, result) => {
    console.log("at point 2");
    if (err) {
        console.log("This error happened at second line.", err);
    } else {
        console.log(result);
    }
    writeFile("./temporary/fileB.txt", "This is line 3\n", {flag: "a"}, (err, result) => {
        console.log("at point 3");
        if (err) {
            console.log("This error happened at third line.", err);
        } else { 
            console.log("hi",result);
        }
    })
  })
});
console.log("at end");