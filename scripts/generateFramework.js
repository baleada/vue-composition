const empty = require('./emptyDir'),
      generateIndex = require('./generateIndex'),
      generateClasses = require('./generateClasses'),
      generateFactories = require('./generateFactories'),
      generateFrameworkIndex = require('./generateFrameworkIndex')


module.exports = function(framework) {
  /* Empty destinations */
  empty(`./src/${framework}/classes`)
  empty(`./src/${framework}/factories`)

  /* Generate files */
  generateClasses(framework)
  generateFactories(framework)

  /* Index all */
  generateIndex(`src/${framework}/util`)
  generateIndex(`src/${framework}/classes`)
  generateIndex(`src/${framework}/factories`)
  generateIndex(`src/${framework}/composed`)

  /* Framework index */
  generateFrameworkIndex(framework)
}
