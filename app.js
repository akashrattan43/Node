// const os = require('os')

// var totalMemory = os.totalmem()
// var freeMemory = os.freemem()

// console.log('TOTAL MEMORY: ' + totalMemory)
// console.log('FREE MEMORY: ' + freeMemory)

// const fs = require('fs')

// // const files = fs.readdirSync('./');
// // console.log(files)

// fs.readdir('./', function(err, files){
//     if (err) console.log('Error', err );
//     else console.log('Result', files)
// })

const EventEmitter = require('events');

const Logger = require('./logger')
const logger = new Logger()

//Register a listener
logger.on('MessageLogged' , (arg) => {
    console.log('Listener called', arg)
})

logger.log('message')