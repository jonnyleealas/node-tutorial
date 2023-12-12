const { writeFileSync } = require('fs')

for(let i = 0; i < 10000; i++){
    writeFileSync('./content/bigFile.txt', `HELLO WORLD ${i}\n`, { flag: 'a'})
}