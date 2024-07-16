const os = require('os');  //os: Operating System, fs: file system
const fs = require('fs');

let userDetails = os.userInfo().username;

// console.log(userDetails)

fs.appendFile(`Oh-hi.txt`, `Hello ${userDetails}`, (err) =>{
    if (err){
        console.log('opps lol')
    }
})

fs.