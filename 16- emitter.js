const EventEmitter = require('events')

const customEmitter = new EventEmitter()

//on will listen to events
//emit will emit the events

customEmitter.on('response', (numBer, words) => {
    let num = 0
    for(let i = 0; i < numBer; i++){
        console.log(num++ + 1, words)
    }
})

customEmitter.on("response", (numbers, words) => {
    console.log('process done', numbers, words)
})

customEmitter.emit('response', 6, 'hello world')