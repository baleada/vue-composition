import { reactive, onMounted } from '@vue/composition-api'
import { toProvisions, resolveRef, resolveOptionsRefs, assignProvisions } from '../util'
import { Animatable } from '@baleada/logic'

export default function useAnimatable (state, options) {
  const reactiveInstance = reactive({})
  onMounted(() => {
    state = resolveRef(state)
    options = resolveOptionsRefs(options)
    const instance = new Animatable(state, options),
          provisions = toProvisions(instance)

    assignProvisions(reactiveInstance, provisions)
  })
  return reactiveInstance
}
