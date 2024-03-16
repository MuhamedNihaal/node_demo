const path = require('path');
console.log(path.sep); //returns platform specific path segment

const filePath = path.join('/content/','/sub','test.txt');
console.log(filePath); //returns joined path of test.txt

const base = path.basename(filePath);
console.log(base); //retuns only the base name that is test.txt

const absolute = path.resolve(__dirname, 'content', 'sub', 'test.txt');
console.log(absolute); //returns the absolute path of test.txt in the computer