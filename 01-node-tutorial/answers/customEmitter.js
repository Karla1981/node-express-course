// Event-Driven Programming
const EventEmitter = require('events');

// instant of the class...
const customEmitter = new EventEmitter()

// 'ON - listen for an event', 'EMIT - emit an event'
customEmitter.on('response', (name, id) => {
    // call back will display in the console
    console.log(`data received user, ${name} with id: ${id}`)
})
// 'ON - listen for an event', 'EMIT - emit an event'
customEmitter.on('response', () =>{
    // call back will display in the console
    console.log(`Other data here`)
})
// Now emit the event with one or several parameters
customEmitter.emit('response', 'Anna', 38)


// Event timer - control + c to stop it. 
   const emitter = new EventEmitter();  
    setInterval(() => {  
        emitter.emit('timerResponse', 'Hello there!');  
    }, 8000);  
    emitter.on('timerResponse', (msg) => {
        console.log(msg)
    }); 

/*
    const EventEmitter = require("events");  
    const emitter = new EventEmitter();  
    const waitForEvent = () => {  
        return new Promise((resolve) => {  
            emitter.on("happens", (msg) => resolve(msg));  
        });  
    };  
    const doWait = async () => {  
    const msg = await waitForEvent();  
    console.log("We got an event! Here it is: ", msg);  
    };  
    doWait();  
    emitter.emit("happens", "Hello World!");  

**/