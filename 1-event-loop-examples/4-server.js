const http = require('http');

const server = http.createServer((req,res) => {
    console.log("Request Event");
    res.end("Hello World");
})

server.listen(8080, () => {
    console.log("Server Listening on Port : 8080");
})
