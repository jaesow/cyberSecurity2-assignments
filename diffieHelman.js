const {
  createDiffHel
} = require('crypto')

const assert = require('assert')


const trialOne = createDiffHel(1024)
const trialOneKey = trialOne.generateKeys()


const trialTwo = createDiffHel(trialOne.prime(), trialOne.generator())
const trialTwoKey = bob.generateKeys()


const trialOneSecret = trialOne.computeSecret(trialTwoKey)
const trialTwoSecret = trialTwo.computeSecret(trialOneKey)

// symmetric key used for encrypted communication
try {
  assert.strictEqual(trialOneSecret.toString('hex'), trialTwoSecret.toString('hex'))
  console.log('They computed the same secret, which means they are able to symmetrically encrypt messages :)')
} catch (e) {
  console.error('They computed different secrets :(')
}
