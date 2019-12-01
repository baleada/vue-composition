import { ref, onMounted, onBeforeUnmount } from '@vue/composition-api'
import { resolveRef, resolveOptionsRefs } from '../util'
import { Listenable } from '@baleada/logic'

export default function useListenable (state, options) {
  const reactiveInstance = ref({})
  onMounted(() => {
    state = resolveRef(state)
    options = resolveOptionsRefs(options)
    const instance = new Listenable(state, options)
          // provisions = toProvisions(instance)

    reactiveInstance.value = instance
    // assignProvisions(reactiveInstance, provisions)
  })
  onBeforeUnmount(() => reactiveInstance.value.stop())
  return reactiveInstance
}
