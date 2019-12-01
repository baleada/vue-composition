import { ref, onMounted } from '@vue/composition-api'
import { resolveRef, resolveOptionsRefs } from '../util'
import { Animatable } from '@baleada/logic'

export default function useAnimatable (state, options) {
  const reactiveInstance = ref({})
  onMounted(() => {
    state = resolveRef(state)
    options = resolveOptionsRefs(options)
    const instance = new Animatable(state, options)
          // provisions = toProvisions(instance)

    reactiveInstance.value = instance
    // assignProvisions(reactiveInstance, provisions)
  })
  return reactiveInstance
}
