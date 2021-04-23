const { toClassCompositionFunctions } = require('../source-transforms/toClassCompositionFunctions.js')
const { writeFileSync } = require('fs')

writeFileSync('src/index.ts', toClassCompositionFunctions())
