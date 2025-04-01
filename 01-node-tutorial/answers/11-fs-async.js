const { writeFile } = require('fs');

console.log('At start');
writeFile('./temporary/fileB.txt', 'First line\n', (error, result) =>{
  console.log('At point 1');
  if (error){
    console.log('This error happened: ', error);
  }
  else{
    console.log('1 : ', result);
    writeFile('./temporary/fileB.txt', 'Second line\n', {flag: 'a'}, (error, result) =>{
      console.log('At point 2');
      if (error){
        console.log('This error happened: ', error);
      }
      else{
        console.log('2: ', result);
      }
    });
  }
  writeFile('./temporary/fileB.txt', 'Third line\n',{flag:'a'}, (error, result) =>{
    console.log('At point 3');
    if (error){
      console.log('This error happened: ', error);
    }
    else{
      console.log('3: ', result);
    }
  });
});
console.log('At end');