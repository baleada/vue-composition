import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
const metadata = require('@baleada/logic/metadata')

const plugins = [
        babel({
          exclude: 'node_modules',
          babelHelpers: 'inline', // 'runtime' was causing problems, possibly because babel may not be transpiling anything in this case
        }),
        resolve(),
      ]

export default [
  {
    external: [
      '@baleada/logic',
      'vue',
      /@babel\/runtime/,
    ],
    input: [
      'src/index.js',
    ],
    output: {
      dir: 'lib',
      format: 'esm',
    },
    plugins,
  },
  // ...metadata.classes.map(tool => ({
  //   external: '@baleada/logic',
  //   input: `src/classes/use${tool.name}.js`,
  //   output: { file: `classes/use${tool.name}.esm.js`, format: 'esm' },
  //   plugins,
  // })),
  // ...metadata.factories.map(tool => ({
  //   external: '@baleada/logic',
  //   input: `src/factories/use${tool.name}.js`,
  //   output: { file: `factories/use${tool.name}.esm.js`, format: 'esm' },
  //   plugins,
  // }))
]
