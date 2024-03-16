const os = require('os');

//info about the user
const user = os.userInfo();

console.log(user);

//method to return system uptime in seconds

console.log(`The system uptime is ${os.uptime} in seconds`);

//some other methods

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS);