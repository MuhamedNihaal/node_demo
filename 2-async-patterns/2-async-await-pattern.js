const { readFile, writeFile } = require('fs').promises;
// const util = require('util');
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)
//UTIL IS A MODULE IN NODE WHICH IS USED IN PROMISES


//USING ASYNC AND AWAIT TO SIMPLIFY THE NESTED MESS
const start = async () => {
    try {
        const first = await readFile('./content/first.txt', 'utf8')
        const second = await readFile('./content/second.txt', 'utf8')
        await writeFile(
            './content/result-mind-grenade.txt', 
            `THIS IS AWESOME : ${first} , ${second}`,
            {flag: 'a'} // this flag is used to append the file
            )
        console.log(first);
        console.log(second);
    } catch (error) {
        console.log(error);
    }

}

start();



// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err)
//             }
//             else {
//                 resolve(data);
//             }
//         })
//     })
// }


// getText('./content/first.txt')
// .then((result) => console.log(result))
// .catch((err) => console.log(err))

//IT IS THE CODE FOR READING THE FILE USING PROMISE