import { reactive, beforeUnMounted } from '@vue/composition-api'
import { Delayable } from '@baleada/logic'

export default function useDelayable (state, options) {
  const reactiveInstance = reactive({})
  onMounted(() => {
    state = resolveRef(state)
    options = resolveOptionsRefs(options)
    const instance = new Listenable(state, options),
          provisions = toProvisions(instance)

    assignProvisions(reactiveInstance, provisions)
  })
  onBeforeUnmount(() => reactiveInstance.stop())
  return reactiveInstance
}
