import { configureable } from '@baleada/prepare'
import toIndex from './source-transforms/toIndex'
import toClassCompositionFunctions from './source-transforms/toClassCompositionFunctions'
import toFactoryCompositionFunctions from './source-transforms/toFactoryCompositionFunctions'

const esm = configureable('rollup')
        .delete({ targets: 'lib/*', verbose: true })
        .resolve()
        .external([
          '@baleada/logic',
          'vue',
        ])
        .input('src/index.js')
        .virtual({
          transform: toIndex,
          test: ({ id }) => /(^|\/)src\/index\.js/.test(id),
        })
        .virtual({
          transform: toClassCompositionFunctions,
          test: ({ id }) => /(^|\/)src\/classes\/index\.js/.test(id),
        })
        .virtual({
          transform: toFactoryCompositionFunctions,
          test: ({ id }) => /(^|\/)src\/factories\/index\.js/.test(id),
        })
        .virtualIndex('src/util')
        .esm({ file: 'lib/index.js', target: 'browser' })
        .configure()

export default [
  esm,
]
