

const crypto = require('crypto')
const { payload, benchmarkFunc } = require('./setup')

benchmarkFunc('Native Node', () => {
  crypto.createHash('sha256').update(payload).digest('hex')
})
