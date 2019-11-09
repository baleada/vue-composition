import { reactive, onMounted, beforeUnMounted } from '@vue/composition-api'
import { toProvisions, resolveRef, resolveOptionsRefs, assignProvisions } from '../util'
import { Listenable } from '@baleada/logic'

export default function useListenable (state, options) {
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
