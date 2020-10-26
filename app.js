const os = require('os')

var totalMemory = os.totalmem()
var freeMemory = os.freemem()

console.log('TOTAL MEMORY: ' + totalMemory)
console.log('FREE MEMORY: ' + freeMemory)