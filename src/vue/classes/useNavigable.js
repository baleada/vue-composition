import { reactive } from '@vue/composition-api'
import { Navigable } from '@baleada/logic'

export default function useNavigable (state, options) {
  const reactiveInstance = reactive({})
  onMounted(() => {
    state = resolveRef(state)
    options = resolveOptionsRefs(options)
    const instance = new Listenable(state, options),
          provisions = toProvisions(instance)

    assignProvisions(reactiveInstance, provisions)
  })
  return reactiveInstance
}
