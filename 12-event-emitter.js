var EventEmitter = require('events');

var customEmitter = new EventEmitter();

customEmitter.on('response' , (name, id) => {
    console.log(`Data Recived of ${name} with ID:${id}`);
})

//WE CAN HAVE AS MANY FUNCTIONS AS WE WANT

customEmitter.on('response' , () => {
    console.log("Some other logic here");
})
//HERE NAME OF THE EVENT IS "RESPONSE"

//WE CAN PASS ARGUMENTS AS WE WANT
customEmitter.emit('response', 'Nihal', 23);