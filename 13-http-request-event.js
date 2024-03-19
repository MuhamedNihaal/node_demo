const http = require('http');

// const server = http.createServer((req,res) => {
//     res.end('Welcome');
// })

//Using the Event Emitter API
const server = http.createServer()

server.on('request', (req,res) => {
    res.end('Welcome');
})
//EMITS REQUEST EVENT
//THIS REQUEST EVENT IS A BUILD IN EVENT IN HTTP SERVER THAT LISTENS TO THE INCOMING REQUESTS AND RESPONDS TO IT
//SO IN BEHIND THE SERVER EMITS THE REQUEST EVENT

server.listen(8080, () => {
    console.log("Server Listening to port 8080...");
});