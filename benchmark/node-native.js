const crypto = require('crypto')
const { payload, benchmarkFunc } = require('./setup')

benchmarkFunc('Native (C) Node module', () => {
  crypto.createHash('sha256').update(payload).digest('hex')
})
