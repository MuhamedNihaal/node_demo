// console.log(__filename); // a global variable

// console.log(require);

setTimeout(() => {
    console.log(__filename);
}, 1000);

setInterval(() => {
    console.log("Hello World");
}, 1000);