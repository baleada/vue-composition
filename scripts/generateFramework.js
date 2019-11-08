const generateLogic = require('./generateLogic'),
      generateFrameworkIndex = require('./generateFrameworkIndex'),
      framework = process.argv[process.argv.length - 1]

generateLogic(framework)
generateFrameworkIndex(framework)
