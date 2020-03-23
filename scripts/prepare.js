const { generateIndex, empty } = require('@baleada/prepare'),
      generateClasses = require('./generateClasses'),
      generateFactories = require('./generateFactories'),
      generateTopLevelIndex = require('./generateTopLevelIndex'),
      compile = require('./compile')

function prepare () {
  /* Empty destinations */
  empty(`src/classes`)
  empty(`src/factories`)

  /* Generate files */
  generateClasses()
  generateFactories()

  /* Index all */
  generateIndex(`src/util`)
  generateIndex(`src/classes`)
  generateIndex(`src/factories`)

  /* Top level index */
  generateTopLevelIndex()

  /* Rollup */
  compile()
}

prepare()
