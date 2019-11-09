const empty = require('./emptyDir'),
      generateIndex = require('./generateIndex'),
      generateClasses = require('./generateClasses'),
      generateSubclasses = require('./generateSubclasses'),
      generateFrameworkIndex = require('./generateFrameworkIndex')


module.exports = function(framework) {
  /* Empty destinations */
  empty(`./src/${framework}/classes`)
  empty(`./src/${framework}/subclasses`)

  /* Generate files */
  generateClasses(framework)
  generateSubclasses(framework)

  /* Index all */
  generateIndex(`src/${framework}/util`)
  generateIndex(`src/${framework}/classes`)
  generateIndex(`src/${framework}/subclasses`)
  generateIndex(`src/${framework}/composed`)

  /* Framework index */
  generateFrameworkIndex(framework)
}
