const fs = require('fs'),
      classBuilders = require('./classBuilders'),
      classes = require('../data/classes.js')

module.exports = function(framework) {
  classes.forEach(({ name, usesDom, needsCleanup }) => {
    const composition = classBuilders[framework]({ name, usesDom, needsCleanup })
    writeFunction(name, composition, framework)
  })

  console.log(`Generated ${classes.length} ${framework} functions`)
}

function writeFunction (name, composition, framework) {
  fs.writeFileSync(
    `./src/${framework}/classes/use${name}.js`,
    composition
  )
}
