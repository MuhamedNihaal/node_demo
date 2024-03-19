const { createReadStream } = require('fs');

const stream = createReadStream('./content/big.txt');

stream.on('data', (result) => {
    console.log(result);
})

//HERE IT IS CHUNK OF DATA
//By Default The Buffer Size is 64kb but we can also Adjust That
//For That we Use 'highWaterMark' which controls the size


// const stream = createReadStream('./content/big.txt', {highWaterMark: 90000});
// const stream = createReadStream('./content/big.txt', {encoding: 'utf8'});


stream.on('error', (err) => {
    console.log(err);
})