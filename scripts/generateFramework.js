const generateClasses = require('./generateClasses'),
      generateSubclasses = require('./generateSubclasses'),
      generateFrameworkIndex = require('./generateFrameworkIndex'),
      framework = process.argv[process.argv.length - 1]

generateClasses(framework)
generateSubclasses(framework)
generateFrameworkIndex(framework)
