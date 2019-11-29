import { ref, onMounted, beforeUnMounted } from '@vue/composition-api'
import { toProvisions, resolveRef, resolveOptionsRefs, assignProvisions } from '../util'
import { Delayable } from '@baleada/logic'

export default function useDelayable (state, options) {
  const reactiveInstance = ref({})
  onMounted(() => {
    state = resolveRef(state)
    options = resolveOptionsRefs(options)
    const instance = new Delayable(state, options)
          // provisions = toProvisions(instance)

    reactiveInstance.value = instance
    // assignProvisions(reactiveInstance, provisions)
  })
  onBeforeUnmount(() => reactiveInstance.value.stop())
  return reactiveInstance
}
