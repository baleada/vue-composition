import { ref } from '@vue/composition-api'
import { Navigable } from '@baleada/logic'

export default function useNavigable (state, options) {
  const instance = new Navigable(state, options),
        reactiveInstance = ref(instance)
  return reactiveInstance
}
