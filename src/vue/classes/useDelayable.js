import { reactive, onMounted, beforeUnMounted } from '@vue/composition-api'
import { toProvisions, resolveRef, resolveOptionsRefs, assignProvisions } from '../util'
import { Delayable } from '@baleada/logic'

export default function useDelayable (state, options) {
  const reactiveInstance = reactive({})
  onMounted(() => {
    state = resolveRef(state)
    options = resolveOptionsRefs(options)
    const instance = new Delayable(state, options),
          provisions = toProvisions(instance)

    assignProvisions(reactiveInstance, provisions)
  })
  onBeforeUnmount(() => reactiveInstance.stop())
  return reactiveInstance
}
