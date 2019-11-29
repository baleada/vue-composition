import { ref } from '@vue/composition-api'
import { Copiable } from '@baleada/logic'

export default function useCopiable (state, options) {
  const instance = new Copiable(state, options),
        reactiveInstance = ref(instance)
  return reactiveInstance
}
