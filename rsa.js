const {
  generator
} = require('crypto')


const encoder = {
  type: 'pkcs1',
  format: 'pem'
}

const genParams = {
  modLen: 1024,
  publicExponent: 3,
  encodePublicKey: encoder,
  encodePrivateKey: encoder
}
