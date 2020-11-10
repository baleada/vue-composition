import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import virtual from '@baleada/rollup-plugin-virtual'
import getFilesToIndex from '@baleada/source-transform-files-to-index'
import toIndex from './source-transforms/toIndex'
import toClassCompositionFunctions from './source-transforms/toClassCompositionFunctions'
import toFactoryCompositionFunctions from './source-transforms/toFactoryCompositionFunctions'

const utilFilesToIndex = getFilesToIndex({ test: ({ id }) => /src\/util\/[^\/]+.js$/.test(id) })

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
    plugins: [
      resolve(),
      virtual({
        transform: toIndex,
        test: ({ id }) => id.endsWith('src/index.js'),
      }),
      virtual({
        transform: toClassCompositionFunctions,
        test: ({ id }) => id.endsWith('src/classes/index.js'),
      }),
      virtual({
        transform: toFactoryCompositionFunctions,
        test: ({ id }) => id.endsWith('src/factories/index.js'),
      }),
      virtual({
        transform: utilFilesToIndex,
        test: ({ id }) => id.endsWith('src/util'),
      }),
      babel({
        exclude: 'node_modules',
        babelHelpers: 'runtime',
      }),
    ]
  },
]
