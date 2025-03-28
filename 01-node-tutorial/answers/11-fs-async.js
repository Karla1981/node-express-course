const { writeFile } = require('fs');

//write file function - file path - text - callback function
try{ writeFile("./temporary/fileB.txt", "This is line 11\n", {flag: "a"}, (result) => {
  console.log("At point 1");
  console.log(result);
})
} catch (err) {
    console.log("This error happened first line: ", err);

} try {
    writeFile("./temporary/fileB.txt", "This is line 22\n", {flag: "a"}, (result) => {
      console.log("At point 2");
      console.log(result);
})
} catch (err) {
    console.log("This error happened at second line.", err);

} try {
    writeFile("./temporary/fileB.txt", "This is line 33\n", {flag: "a"}, (result) => {
      console.log("At point 3");
      console.log(result)
})
} catch(err) {
    console.log("This error happened at third line.", err);
};
console.log("At end");