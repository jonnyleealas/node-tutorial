const {readFileSync, writeFileSync} = require('fs')

const rFile = readFileSync('./content/first.txt', 'utf-8')
const rFile2 = readFileSync('./content/second.txt','utf-8')
console.log(rFile)
console.log(rFile2)

writeFileSync(
    './content/result-writeSync.txt', 
    `These files were added: rFile = ${rFile} and rFile2 = ${rFile2} `, 
    { flag: 'a'}
)