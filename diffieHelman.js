const {
  createDiffHel
} = require('crypto')

const assert = require('assert')


const trialOne = createDiffHel(1024)
const trialOneKey = trialOne.generateKeys()
