var http = require('http');
var fs = require('fs');

//Here we Used function method rather than arrow method just showcasing that we can do it both ways
http.createServer(function (req, res) {
    // const text = fs.readFileSync('./content/big.txt', 'utf8');
    // res.end(text);


    const fileStream = fs.createReadStream('./content/big.txt', 'utf8');
    fileStream.on('open', () => {
        fileStream.pipe(res)
    })
    fileStream.on('error', (err) => {
        res.end(err);
    })
}).listen(8080);