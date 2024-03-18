const { readFile } = require('fs');

console.log("Started a First Task");
// Check file path

//here readFile is asynchronus and event loop will offload it
readFile('./content/first.txt' , 'utf8' ,(err , result) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
    console.log("Completed First Task");
})

console.log("Starting Second Task");