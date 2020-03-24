const { generateIndex, empty } = require('@baleada/prepare'),
      generateClasses = require('./generateClasses'),
      generateFactories = require('./generateFactories'),
      compile = require('./compile')

function prepare () {
  /* Empty destinations */
  empty('lib')
  empty('src/classes')
  empty('src/factories')

  /* Generate files */
  generateClasses()
  generateFactories()

  /* Index all */
  generateIndex('src/util')
  generateIndex('src/classes')
  generateIndex('src/factories')

  /* Top level index */
  generateIndex(
    ['src/classes', 'src/factories'],
    { outfile: 'src/index', extensions: ['js', 'vue'] }
  )

  /* Rollup */
  compile()
}

prepare()
