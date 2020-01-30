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

// generate "trialOne" and "trialTwo rsa keys based on the above parameters
const trialOne = generator('rsa', genParam)
const trialTwo = generator('rsa', genParam)

// print their keys
console.log(' TRIAL ONE PUBLIC KEY')
console.log('===================')
console.log(trialOne.publicKey)

console.log(' TRIAL TWO PUBLIC KEY')
console.log('=================')
console.log(trialTwo.publicKey)
