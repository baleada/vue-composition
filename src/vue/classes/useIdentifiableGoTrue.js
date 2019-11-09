import { reactive } from '@vue/composition-api'
import { IdentifiableGoTrue } from '@baleada/logic'

export default function useIdentifiableGoTrue (state, options) {
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
