const { readFileSync , writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
console.log(first);
console.log(second);
//reads the files in the corresponding path



writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first}, ${second}`,
    {flag: 'a'}
)
//write the file to the corresponding directory if it already exist the data will be added to the end of the file