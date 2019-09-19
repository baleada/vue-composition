import { reactive } from '@vue/composition-api'
import { Delayable } from '@baleada/logic'

export default function useDelayable (state, options) {
  const instance = new Delayable(state, options),
        reactiveInstance = reactive(instance)

  return reactiveInstance
}
