const {
  createDiffHel
} = require('crypto')

const assert = require('assert')


const trialOne = createDiffHel(1024)
const trialOneKey = trialOne.generateKeys()

// derive bob's keys from alice's key generation parameters
const trialTwo = createDiffHel(trialOne.prime(), trialOne.generator())
const trialTwoKey = bob.generateKeys()

// compute alice and bob's shared secret
const trialOneSecret = trialOne.computeSecret(trialTwoKey)
const trialTwoSecret = trialTwo.computeSecret(trialOneKey)
