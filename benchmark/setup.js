function timeSpent(start) {
  return `${(new Date().getTime() - start) / 1000}s`
}

function heapUsed() {
  const used = process.memoryUsage().heapUsed / 1024 / 1024
  return `${Math.round(used * 100) / 100} MB`
}

module.exports = {
  payload: 'a small sha256 payload',
  benchmarkFunc(name, func) {
    let i = 0
    let start = new Date().getTime()
    for (; i < 1000000; i++) {
      func()
    }
    console.log(`${name}: ${timeSpent(start)}/${heapUsed()}`)
  }
}
