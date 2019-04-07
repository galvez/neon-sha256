const CryptoJS = require('crypto-js')
const SHA256 = require('crypto-js/sha256')

const s = (ms) => ms / 1000

let i
let start

const a = 'jonas galvez'
i = 0
start = new Date().getTime()
for (; i < 1000000; i++) {
  SHA256(a).toString(CryptoJS.enc.Hex)
}
console.log(s(new Date().getTime() - start))

const used = process.memoryUsage().heapUsed / 1024 / 1024
console.log(`${Math.round(used * 100) / 100} MB`)