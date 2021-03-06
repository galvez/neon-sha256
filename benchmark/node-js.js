const CryptoJS = require('crypto-js')
const SHA256 = require('crypto-js/sha256')
const { payload, benchmarkFunc } = require('./setup')

benchmarkFunc('Pure JavaScript (crypto-js)', () => {
  SHA256(payload).toString(CryptoJS.enc.Hex)
})
