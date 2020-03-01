import { ref } from '@vue/composition-api'
import { Copyable } from '@baleada/logic'

export default function useCopyable (state, options) {
  const instance = new Copyable(state, options),
        reactiveInstance = ref(instance)
  return reactiveInstance
}
