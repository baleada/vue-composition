import { suite as createSuite } from 'uvu'
import * as assert from 'uvu/assert'
import { toClassCompositionFunction } from '../../source-transforms/toClassCompositionFunctions.js'

const suite = createSuite('toClassCompositionFunction')

suite(`transforms classes`, context => {
  const value = toClassCompositionFunction({ name: 'Stub', needsCleanup: false }).replace(/\n\s+/g, '\n'),
        expected = '\
export function useStub (state, options) {\n\
const instance = new Stub(state, options),\n\
reactiveInstance = ref(instance)\n\
return reactiveInstance\n\
}\n\
'

  assert.is(value, expected)  
})

suite(`transforms classes that need cleanup`, context => {
  const value = toClassCompositionFunction({ name: 'Stub', needsCleanup: true }).replace(/\n\s+/g, '\n'),
        expected = '\
export function useStub (state, options) {\n\
const instance = new Stub(state, options),\n\
reactiveInstance = ref(instance)\n\
onBeforeUnmount(() => reactiveInstance.value.stop())\n\
return reactiveInstance\n\
}\n\
'

  assert.is(value, expected)  
})

suite.run()
