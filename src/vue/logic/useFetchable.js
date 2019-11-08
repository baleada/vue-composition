import { reactive } from '@vue/composition-api'
import { Fetchable } from '@baleada/logic'

export default function useFetchable (state, options) {
  const instance = new Fetchable(state, options),
        reactiveInstance = reactive(instance)

  return reactiveInstance
}
