const EventEmitter = require("events");  

const customEmitter = new EventEmitter();  

customEmitter.on('res', (name, className) => {
    console.log(`Hello my name is ${name} and I am taking ${className}`);
})
customEmitter.on('res', () => {

    const n1 = 2;
    const n2 = 4;
    const mult = n1*n2;
    
    // Display what's inside this function.
    console.log(`This is great! ${mult}`);
})
// Display in the console the response.
customEmitter.emit('res', 'Karla', 'Node Js.');