
const crypto = require('crypto')
const s = (ms) => ms / 1000

let i
let start

const a = 'jonas galvez'
i = 0
start = new Date().getTime()
for (; i < 1000000; i++) {
  crypto.createHash('sha256').update(a).digest('hex')
}
console.log(s(new Date().getTime() - start))

const used = process.memoryUsage().heapUsed / 1024 / 1024
console.log(`${Math.round(used * 100) / 100} MB`)