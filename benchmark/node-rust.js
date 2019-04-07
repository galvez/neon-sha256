const { strToSHA256Hex } = require('../lib')
const { payload, benchmarkFunc } = require('./setup')

benchmarkFunc('Native (Rust) Node module', () => {
  strToSHA256Hex(payload)
})
