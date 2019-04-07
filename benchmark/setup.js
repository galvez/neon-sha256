export function formatTime(ms) {
  return `${ms / 1000}s`
}

export const payload = 'a small sha256 payload'

export function benchmarkFunc(func) {
  let i = 0
  let start = new Date().getTime()

}

i = 0
start
for (; i < 1000000; i++) {
  SHA256(a).toString(CryptoJS.enc.Hex)
}
console.log(s(new Date().getTime() - start))

const used = process.memoryUsage().heapUsed / 1024 / 1024
console.log(`${Math.round(used * 100) / 100} MB`)