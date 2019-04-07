const { strToSHA256Hex } = require('../native')
const { payload, benchmarkFunc } = require('./setup')

benchmarkFunc('Native (Rust) Node module', () => {
  strToSHA256Hex(payload)
})
