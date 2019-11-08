import { reactive } from '@vue/composition-api'
import { Poppable } from '@baleada/logic'

export default function usePoppable (state, options) {
  const instance = new Poppable(state, options),
        reactiveInstance = reactive(instance)

  return reactiveInstance
}