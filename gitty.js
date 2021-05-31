const { exec } = require('child_process');

let args = process.argv;
args.splice(0,2);
let str = args.join(' ');

console.log(str);


const cbAdd = (err, stdin, stdout) => {
    if(err) {
        console.log(err);
    }
    console.log('stdin: ',stdin);
    console.log('stdout: ',stdout);
    console.log('err: ',err);
}

exec('git add .', cbAdd);


const cbCommit = (err, stdin, stdout) => {
    if(err) {
        console.log(err);
    }
    console.log('stdin: ',stdin);
    console.log('stdout: ',stdout);
    console.log('err: ',err);
}

exec(`git commit -m"${str}"`, cbCommit);

