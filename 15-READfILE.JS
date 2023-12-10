const { readFile } = require('fs')
const { resolve } = require('path')

const getText = (path) => {
    return new Promise ((resolve, reject) => {
        readFile('./content/first.txt', 'utf-8', (err, data) => {
            if(err) {
                reject(err)
            } else {
                console.log(data)
            }
        })

    })
}

