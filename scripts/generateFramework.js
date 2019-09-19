const { generateFunctions } = require('./generateFunctions'),
      { generateIndex } = require('./generateIndex'),
      framework = process.argv[process.argv.length - 1]

generateFunctions(framework)
generateIndex(framework)
