const generateIndex = require('./generateIndex'),
      generateFramework = require('./generateFramework'),
      babelifyFramework = require('./babelifyFramework'),
      empty = require('./emptyDir')

function prepare () {
  /* Generate files */
  generateFramework('react')
  generateFramework('svelte')
  generateFramework('vue')

  /* Transform files */
  babelifyFramework('react')
  babelifyFramework('svelte')
  babelifyFramework('vue')
}

prepare()
