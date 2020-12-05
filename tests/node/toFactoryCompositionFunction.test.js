import { suite as createSuite } from 'uvu'
import * as assert from 'uvu/assert'
import { toFactoryCompositionFunction } from '../../source-transforms/toFactoryCompositionFunctions.js'

const suite = createSuite('toFactoryCompositionFunction')

suite(`transforms factories and camelCases function name`, context => {
  const value = toFactoryCompositionFunction({ name: 'stub', needsCleanup: false }).replace(/\n\s+/g, '\n'),
        expected = '\
export function useStub (state, options) {\n\
return ref(stub(state, options))\n\
}\n\
'

  assert.is(value, expected)  
})

suite.run()
