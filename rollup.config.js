import { configureable } from '@baleada/prepare'
import toIndex from './source-transforms/toIndex'
import toClassCompositionFunctions from './source-transforms/toClassCompositionFunctions'
import toPipeCompositionFunctions from './source-transforms/toPipeCompositionFunctions'

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
          test: ({ id }) => /(^|\/)src\/classes\.js/.test(id),
        })
        .virtual({
          transform: toPipeCompositionFunctions,
          test: ({ id }) => /(^|\/)src\/pipes\.js/.test(id),
        })
        .esm({ file: 'lib/index.js', target: 'browser' })
        .configure()

export default [
  esm,
]
